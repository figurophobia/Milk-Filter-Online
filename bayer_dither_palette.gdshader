shader_type canvas_item;

uniform float brightness : hint_range(0.1, 3.0) = 1.0;
uniform float contrast : hint_range(0.1, 3.0) = 1.5;
uniform float dither_strength : hint_range(0.0, 2.0) = 0.75;
uniform int target_size : hint_range(16, 1024) = 256;
uniform float texture_aspect_ratio : hint_range(0.1, 10.0) = 1.0;

uniform int palette_colors : hint_range(2, 16) = 4;
uniform int palette_index : hint_range(0, 2) = 0;
uniform bool highlighter = false;

const int BAYER8[64] = int[](
	0, 48, 12, 60, 3, 51, 15, 63,
	32, 16, 44, 28, 35, 19, 47, 31,
	8, 56, 4, 52, 11, 59, 7, 55,
	40, 24, 36, 20, 43, 27, 39, 23,
	2, 50, 14, 62, 1, 49, 13, 61,
	34, 18, 46, 30, 33, 17, 45, 29,
	10, 58, 6, 54, 9, 57, 5, 53,
	42, 26, 38, 22, 41, 25, 37, 21
);

vec3 get_base_palette_color(int idx, int color_idx) {
	if (idx == 0) {
		if (color_idx == 0) return vec3(29.0, 1.0, 16.0) / 255.0;
		if (color_idx == 1) return vec3(26.0, 23.0, 28.0) / 255.0;
		if (color_idx == 2) return vec3(40.0, 83.0, 67.0) / 255.0;
		return vec3(150.0, 215.0, 173.0) / 255.0;
	}
	if (idx == 1) {
		if (color_idx == 0) return vec3(0.0, 0.0, 0.0);
		if (color_idx == 1) return vec3(31.0, 0.0, 102.0) / 255.0;
		return vec3(146.0, 0.0, 137.0) / 255.0;
	}
	if (color_idx == 0) return vec3(0.0, 0.0, 0.0);
	if (color_idx == 1) return vec3(25.0, 105.0, 44.0) / 255.0;
	if (color_idx == 2) return vec3(224.0, 110.0, 22.0) / 255.0;
	return vec3(247.0, 219.0, 126.0) / 255.0;
}

int get_base_palette_size(int idx) {
	if (idx == 1) return 3;
	return 4;
}

float clampf(float v, float min_v, float max_v) {
	return max(min(v, max_v), min_v);
}

vec2 get_pixel_uv(vec2 uv) {
	vec2 pixel_count;
	if (texture_aspect_ratio >= 1.0) {
		pixel_count.y = float(target_size);
		pixel_count.x = float(target_size) * texture_aspect_ratio;
	} else {
		pixel_count.x = float(target_size);
		pixel_count.y = float(target_size) / texture_aspect_ratio;
	}
	vec2 pixel_size = vec2(1.0) / pixel_count;
	return floor(uv / pixel_size) * pixel_size + pixel_size * 0.5;
}

vec2 get_pixel_grid(vec2 uv) {
	if (texture_aspect_ratio >= 1.0) {
		return uv * vec2(float(target_size) * texture_aspect_ratio, float(target_size));
	}
	return uv * vec2(float(target_size), float(target_size) / texture_aspect_ratio);
}

vec3 get_expanded_palette_color(float t, int idx, int colors_count) {
	int base_size = get_base_palette_size(idx);
	if (colors_count <= base_size) {
		int q = int(round(t * float(base_size - 1)));
		q = int(clampf(float(q), 0.0, float(base_size - 1)));
		return get_base_palette_color(idx, q);
	}

	float segments = float(base_size - 1);
	float seg_pos = clampf(t, 0.0, 1.0) * segments;
	int seg_idx = int(floor(seg_pos));
	seg_idx = int(clampf(float(seg_idx), 0.0, float(base_size - 2)));
	float local_t = seg_pos - float(seg_idx);

	vec3 from = get_base_palette_color(idx, seg_idx);
	vec3 to = get_base_palette_color(idx, seg_idx + 1);
	return mix(from, to, local_t);
}

void fragment() {
	vec2 pixel_uv = get_pixel_uv(UV);
	vec4 sample_col = texture(TEXTURE, pixel_uv);

	if (sample_col.a <= 0.0) {
		COLOR = vec4(0.0);
		return;
	}

	float shader_brightness = brightness;
	float shader_contrast = contrast;
	if (highlighter) {
		shader_brightness = 1.2;
		shader_contrast = 2.1;
	}

	float greyscale = sample_col.r * 0.3 + sample_col.g * 0.59 + sample_col.b * 0.11;
	float with_contrast = (greyscale - 0.5) * shader_contrast + 0.5;
	float with_brightness = pow(clampf(with_contrast, 0.0, 1.0), shader_brightness);

	vec2 grid = get_pixel_grid(pixel_uv);
	int x = int(grid.x) % 8;
	int y = int(grid.y) % 8;
	int bayer_index = y * 8 + x;
	float bayer_value = float(BAYER8[bayer_index]);
	float filtered = clampf(with_brightness + (bayer_value - 32.0) * dither_strength / 255.0, 0.0, 1.0);

	int colors_count = int(clampf(float(palette_colors), 2.0, 16.0));
	vec3 final_rgb = get_expanded_palette_color(filtered, palette_index, colors_count);

	COLOR = vec4(final_rgb, sample_col.a);
}
