#!/usr/bin/env python3
"""Fetch real analytics from GoatCounter and rewrite the Stats section of README.md."""
import json
import os
import re
import urllib.error
import urllib.request
from datetime import datetime, timezone

SITE = "https://figurophobia.goatcounter.com"
TOKEN = os.environ["GOATCOUNTER_TOKEN"]
REPO_ROOT = os.path.join(os.path.dirname(__file__), "..", "..")
README = os.path.join(REPO_ROOT, "README.md")
BADGES_DIR = os.path.join(REPO_ROOT, "badges")
BADGE_COLOR = "blueviolet"

FILTER_LABELS = {"dither": "Pixel Art filter", "milk": "Milk filter"}
FILTER_ORDER = ["dither", "milk"]
ACTION_LABELS = {"save": "saved", "copy": "copied"}
ACTION_ORDER = ["save", "copy"]


def sort_key(order):
    return lambda x: (order.index(x), x) if x in order else (len(order), x)


def api_get(path, **params):
    qs = "&".join(f"{k}={v}" for k, v in params.items())
    url = f"{SITE}{path}?{qs}" if qs else f"{SITE}{path}"
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json",
    })
    try:
        with urllib.request.urlopen(req) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"GoatCounter API error {e.code} on {path}: {body}")
        raise


def fetch_hits():
    hits, after = [], None
    while True:
        params = {"start": "2020-01-01T00:00:00Z", "limit": 100}
        if after:
            params["after"] = after
        data = api_get("/api/v0/stats/hits", **params)
        hits.extend(data["hits"])
        if not data.get("more"):
            break
        after = data["hits"][-1]["path_id"]
    return hits


def build_section(hits, pageviews, total_events):
    events = [h for h in hits if h["event"]]

    grouped = {}
    for h in events:
        filt, _, action = h["path"].rpartition("-")
        grouped.setdefault(filt, {})[action] = h["count"]

    lines = [
        f"* **{pageviews}** pageviews",
        f"* **{total_events}** images exported (saved or copied to clipboard)",
    ]
    for filt in sorted(grouped, key=sort_key(FILTER_ORDER)):
        actions = grouped[filt]
        label = FILTER_LABELS.get(filt, filt.title())
        parts = " · ".join(
            f"{actions[a]} {ACTION_LABELS.get(a, a)}"
            for a in sorted(actions, key=sort_key(ACTION_ORDER))
        )
        lines.append(f"  * {label}: {parts}")

    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines.append("")
    lines.append(f"*(last updated: {now})*")
    return "\n".join(lines)


def write_shield(name, label, message):
    os.makedirs(BADGES_DIR, exist_ok=True)
    payload = {"schemaVersion": 1, "label": label, "message": str(message), "color": BADGE_COLOR}
    with open(os.path.join(BADGES_DIR, name), "w", encoding="utf-8") as f:
        json.dump(payload, f)
        f.write("\n")


def main():
    hits = fetch_hits()
    pageviews = sum(h["count"] for h in hits if not h["event"])
    total_events = sum(h["count"] for h in hits if h["event"])

    write_shield("pageviews.json", "pageviews", pageviews)
    write_shield("exported.json", "images exported", total_events)

    section = build_section(hits, pageviews, total_events)

    with open(README, encoding="utf-8") as f:
        content = f.read()

    new_content = re.sub(
        r"<!-- STATS:START -->.*?<!-- STATS:END -->",
        lambda _: f"<!-- STATS:START -->\n{section}\n<!-- STATS:END -->",
        content,
        flags=re.DOTALL,
    )

    if new_content == content:
        print("No changes to README.")
        return

    with open(README, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("README updated.")


if __name__ == "__main__":
    main()
