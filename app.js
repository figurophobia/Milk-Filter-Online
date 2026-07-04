// ============================================================
// Constants
// ============================================================

const BAYER8 = [
  0, 48, 12, 60, 3, 51, 15, 63,
  32, 16, 44, 28, 35, 19, 47, 31,
  8, 56, 4, 52, 11, 59, 7, 55,
  40, 24, 36, 20, 43, 27, 39, 23,
  2, 50, 14, 62, 1, 49, 13, 61,
  34, 18, 46, 30, 33, 17, 45, 29,
  10, 58, 6, 54, 9, 57, 5, 53,
  42, 26, 38, 22, 41, 25, 37, 21
];

const DITHER_PALETTE_KEYS = ['purple', 'milk1', 'milk2', 'earth', 'dark-green', 'olive', 'greyscale'];
const DITHER_PALETTE_LABELS = {
  'purple': 'Purple',
  'milk1': 'Milk 1',
  'milk2': 'Milk 2',
  'earth': 'Earth',
  'dark-green': 'Green',
  'olive': 'Olive',
  'greyscale': 'Grey'
};
const DITHER_PALETTES = {
  'purple': [[0, 0, 0], [31, 0, 102], [146, 0, 137]],
  'milk1': [[0, 0, 0], [102, 0, 31], [137, 0, 146]],
  'milk2': [[0, 0, 0], [92, 36, 60], [203, 43, 43]],
  'earth': [[0, 0, 0], [25, 105, 44], [224, 110, 22], [247, 219, 126]],
  'dark-green': [[29, 1, 16], [26, 23, 28], [40, 83, 67], [150, 215, 173]],
  'olive': [[16, 1, 29], [28, 23, 26], [67, 83, 40], [173, 215, 150]],
  'greyscale': [[0, 0, 0], [85, 85, 85], [170, 170, 170], [255, 255, 255]]
};

const DITHER_LEVELS = {
  brightness: [0.4, 0.6, 0.8, 1.0, 1.3, 1.6, 2.0],
  contrast: [0.5, 0.8, 1.1, 1.5, 1.9, 2.3, 2.8],
  ditherStrength: [0.0, 0.3, 0.55, 0.8, 1.1, 1.5, 2.0],
  pixelScale: [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32],
  paletteColors: [2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16]
};

const MILK_LEVELS = {
  brightness: [0.4, 0.6, 0.8, 1.0, 1.3, 1.6, 2.0],
  contrast: [0.4, 0.6, 0.8, 1.0, 1.3, 1.6, 2.0]
};

const MILK_PALETTE_KEYS = ['milk1', 'milk2'];
const MILK_PALETTE_LABELS = { 'milk1': 'Milk 1', 'milk2': 'Milk 2' };
const MILK_PALETTES = {
  'milk1': [[0, 0, 0], [102, 0, 31], [137, 0, 146]],
  'milk2': [[0, 0, 0], [92, 36, 60], [203, 43, 43]]
};
const MILK_COMPRESSION_LEVELS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const TRANSLATIONS = {
  en: {
    title: 'MILK FILTER ONLINE',
    subtitle: '',
    tabDither: 'Pixel Art Filter',
    tabMilk: 'Milk Filter',
    chooseFile: 'Choose File',
    reset: 'Reset',
    ditherSettings: 'Pixel Art Settings',
    milkSettings: 'Milk Settings',
    palette: 'Palette',
    brightness: 'Brightness',
    contrast: 'Contrast',
    pixelScale: 'Pixel Scale',
    advanced: 'Advanced',
    ditherIntensity: 'Grain',
    paletteColors: 'Palette Colors',
    effect: 'Effect',
    pointillism: 'Pointillism',
    compression: 'Compression',
    compressionLevel: 'Level',
    result: 'Result',
    copyResult: 'Copy Result',
    saveImage: 'Save Image',
    saveVideo: 'Save Video',
    uploadPrompt: 'Upload an image or video to start.',
    outputSize: 'Output size: -',
    resetDone: 'Settings reset to defaults.',
    imageLoaded: 'Image loaded and processed.',
    videoLoaded: 'Video loaded and processing live.',
    clipboardNA: 'Clipboard API not available in this browser.',
    clipboardFail: 'Could not copy the image right now.',
    clipboardOk: 'Result copied to clipboard.',
    clipboardDenied: 'Clipboard permission denied or not supported.',
    recording: 'Recording processed video...',
    recordNA: 'Video recording not supported in this browser.',
    noFormat: 'No supported video format for recording.',
    videoSaved: 'Processed video downloaded.',
    on: 'On',
    off: 'Off'
  },
  es: {
    title: 'MILK FILTER ONLINE',
    subtitle: '',
    tabDither: 'Filtro Pixel Art',
    tabMilk: 'Filtro Milk',
    chooseFile: 'Elegir Archivo',
    reset: 'Reiniciar',
    ditherSettings: 'Ajustes Pixel Art',
    milkSettings: 'Ajustes Milk',
    palette: 'Paleta',
    brightness: 'Brillo',
    contrast: 'Contraste',
    pixelScale: 'Escala Pixel',
    advanced: 'Avanzado',
    ditherIntensity: 'Grano',
    paletteColors: 'Colores Paleta',
    effect: 'Efecto',
    pointillism: 'Puntillismo',
    compression: 'Compresion',
    compressionLevel: 'Nivel',
    result: 'Resultado',
    copyResult: 'Copiar Resultado',
    saveImage: 'Guardar Imagen',
    saveVideo: 'Guardar Video',
    uploadPrompt: 'Sube una imagen o video para empezar.',
    outputSize: 'Tamano de salida: -',
    resetDone: 'Ajustes restaurados.',
    imageLoaded: 'Imagen cargada y procesada.',
    videoLoaded: 'Video cargado y procesando.',
    clipboardNA: 'API portapapeles no disponible.',
    clipboardFail: 'No se pudo copiar la imagen.',
    clipboardOk: 'Resultado copiado al portapapeles.',
    clipboardDenied: 'Permiso de portapapeles denegado.',
    recording: 'Grabando video procesado...',
    recordNA: 'Grabacion de video no soportada.',
    noFormat: 'Ningun formato de video soportado.',
    videoSaved: 'Video procesado descargado.',
    on: 'On',
    off: 'Off'
  }
};

// ============================================================
// State
// ============================================================

const sharedImageState = { source: null, isVideo: false, objectUrl: null };

let activeFilter = 'dither';
let currentLang = 'en';

const ditherDefault = {
  brightnessIdx: 3,
  contrastIdx: 3,
  ditherStrengthIdx: 3,
  pixelScaleIdx: 3,
  paletteColorsIdx: 1,
  paletteIdx: 1
};
const ditherState = { ...ditherDefault };

const milkDefault = {
  paletteIdx: 0,
  brightnessIdx: 3,
  contrastIdx: 3,
  pointillism: false,
  compression: false,
  compressionLevelIdx: 4
};
const milkState = { ...milkDefault };

let lastResultCanvas = null;
let isRecording = false;
let videoAnimHandle = null;

// ============================================================
// DOM refs
// ============================================================

const globalProgressBar = document.getElementById('globalProgressBar');
const globalProgressBarFill = document.getElementById('globalProgressBarFill');

const resultCanvas = document.getElementById('resultCanvas');
const resultCtx = resultCanvas.getContext('2d');
const resultViewport = document.getElementById('resultViewport');
const magnifierLens = document.getElementById('magnifierLens');
const magnifierCanvas = document.getElementById('magnifierCanvas');
const magnifierCtx = magnifierCanvas.getContext('2d');

const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const muteBtn = document.getElementById('muteBtn');
const resetAllBtn = document.getElementById('resetAllBtn');
const statusText = document.getElementById('statusText');
const targetDimsValue = document.getElementById('targetDimsValue');

const MAGNIFIER_SIZE = 160;
const MAGNIFIER_SCALE = 6;
magnifierCanvas.width = MAGNIFIER_SIZE;
magnifierCanvas.height = MAGNIFIER_SIZE;

// ============================================================
// Utilities
// ============================================================

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }
function clampIndex(v, len) { return Math.max(0, Math.min(len - 1, v)); }
function wrapIndex(v, len) { return (v + len) % len; }

function getSourceDimensions(source) {
  if (!source) return null;
  if (source instanceof HTMLVideoElement) {
    return { width: source.videoWidth, height: source.videoHeight };
  }
  return { width: source.naturalWidth || source.width, height: source.naturalHeight || source.height };
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), 'image/png'));
}


function syncMuteBtn() {
  if (!sharedImageState.isVideo) {
    muteBtn.style.display = 'none';
    return;
  }
  muteBtn.style.display = '';
  const v = sharedImageState.source;
  const isMuted = v?.muted !== false;
  muteBtn.innerHTML = isMuted
    ? '<img src="assets/Mute_Icon.png" alt="muted">'
    : '<img src="assets/Speaker_Icon.png" alt="sound">';
}

function setControlsLocked(locked) {
  document.querySelectorAll('.step-btn').forEach(b => b.disabled = locked);
  resetAllBtn.disabled = locked;
  document.querySelectorAll('.filter-tab').forEach(b => b.disabled = locked);
  document.querySelector('label[for="bayerImageInput"]')?.classList.toggle('disabled', locked);
  if (locked) {
    document.getElementById('bayerImageInput').disabled = true;
  } else {
    document.getElementById('bayerImageInput').disabled = false;
  }
}

function toggleMute() {
  if (!(sharedImageState.source instanceof HTMLVideoElement)) return;
  const v = sharedImageState.source;
  v.muted = !v.muted;
  syncMuteBtn();
}

// ============================================================
// Progress bar
// ============================================================

let progressHideTimer = null;

function showProgress(percent) {
  if (!globalProgressBar) return;
  clearTimeout(progressHideTimer);
  globalProgressBar.classList.add('visible');
  globalProgressBarFill.style.width = `${clamp(percent, 0, 100)}%`;
}

function hideProgress() {
  if (!globalProgressBar) return;
  globalProgressBarFill.style.width = '100%';
  progressHideTimer = setTimeout(() => {
    globalProgressBar.classList.remove('visible');
    globalProgressBarFill.style.width = '0%';
  }, 250);
}

// ============================================================
// i18n
// ============================================================

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.en[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key === 'outputSize' || key === 'uploadPrompt' || key === 'subtitle') return;
    const text = t(key);
    if (text) el.textContent = text;
  });
  syncDitherUi();
  syncMilkUi();
}

// ============================================================
// Palette preview rendering
// ============================================================

function renderPalettePreview(containerId, colors) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  for (const [r, g, b] of colors) {
    const swatch = document.createElement('span');
    swatch.className = 'palette-swatch';
    swatch.style.backgroundColor = `rgb(${r},${g},${b})`;
    container.appendChild(swatch);
  }
}

// ============================================================
// Shared image interactions
// ============================================================

function fileToImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Unable to load image.')); };
    img.src = url;
  });
}

function fileToVideo(file) {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    const url = URL.createObjectURL(file);
    video.dataset.objectUrl = url;
    video.addEventListener('loadedmetadata', () => resolve(video), { once: true });
    video.addEventListener('error', () => { URL.revokeObjectURL(url); reject(new Error('Unable to load video.')); }, { once: true });
    video.src = url;
  });
}

function startVideoLoop() {
  stopVideoLoop();
  const step = () => {
    if (!sharedImageState.isVideo) return;
    processImage();
    videoAnimHandle = requestAnimationFrame(step);
  };
  videoAnimHandle = requestAnimationFrame(step);
}

function stopVideoLoop() {
  if (videoAnimHandle) cancelAnimationFrame(videoAnimHandle);
  videoAnimHandle = null;
}

function getFirstMediaFile(candidates) {
  for (const c of Array.from(candidates || [])) {
    if (c && c.type && (c.type.startsWith('image/') || c.type.startsWith('video/'))) return c;
  }
  return null;
}

function getDroppedMediaFile(dt) {
  if (!dt) return null;
  return getFirstMediaFile(dt.files) ||
    getFirstMediaFile(Array.from(dt.items || []).map(i => i.kind === 'file' ? i.getAsFile() : null));
}

function getPastedMediaFile(cd) {
  if (!cd) return null;
  return getFirstMediaFile(cd.files) ||
    getFirstMediaFile(Array.from(cd.items || []).map(i => (i.type.startsWith('image/') || i.type.startsWith('video/')) ? i.getAsFile() : null));
}

async function loadSharedMediaFile(file) {
  if (!file) return false;
  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');
  if (!isImage && !isVideo) return false;

  showProgress(15);
  stopVideoLoop();

  if (sharedImageState.source instanceof HTMLVideoElement) {
    sharedImageState.source.pause();
    sharedImageState.source.src = '';
    sharedImageState.source.load();
  }

  if (sharedImageState.objectUrl) {
    URL.revokeObjectURL(sharedImageState.objectUrl);
    sharedImageState.objectUrl = null;
  }

  try {
    showProgress(45);
    if (isVideo) {
      const video = await fileToVideo(file);
      showProgress(80);
      sharedImageState.source = video;
      sharedImageState.isVideo = true;
      sharedImageState.objectUrl = video.dataset.objectUrl || null;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
      syncMuteBtn();
      startVideoLoop();
    } else {
      const img = await fileToImage(file);
      showProgress(80);
      sharedImageState.source = img;
      sharedImageState.isVideo = false;
      sharedImageState.objectUrl = null;
    }
    processImage();
    hideProgress();
    return true;
  } catch {
    hideProgress();
    return false;
  }
}

// ============================================================
// Dither filter
// ============================================================

function ditherSettings() {
  return {
    brightness: DITHER_LEVELS.brightness[ditherState.brightnessIdx],
    contrast: DITHER_LEVELS.contrast[ditherState.contrastIdx],
    ditherStrength: DITHER_LEVELS.ditherStrength[ditherState.ditherStrengthIdx],
    pixelScale: DITHER_LEVELS.pixelScale[ditherState.pixelScaleIdx],
    paletteColors: DITHER_LEVELS.paletteColors[ditherState.paletteColorsIdx],
    palette: DITHER_PALETTE_KEYS[ditherState.paletteIdx]
  };
}

function buildExpandedPalette(basePalette, targetColors) {
  const count = Math.max(2, targetColors);
  if (count === basePalette.length) return basePalette;
  const expanded = [];
  const segments = basePalette.length - 1;
  for (let i = 0; i < count; i++) {
    const norm = count === 1 ? 0 : i / (count - 1);
    const pos = norm * segments;
    const seg = Math.min(segments - 1, Math.floor(pos));
    const lt = pos - seg;
    const from = basePalette[seg];
    const to = basePalette[Math.min(seg + 1, basePalette.length - 1)];
    expanded.push([
      Math.round(lerp(from[0], to[0], lt)),
      Math.round(lerp(from[1], to[1], lt)),
      Math.round(lerp(from[2], to[2], lt))
    ]);
  }
  return expanded;
}

function processDither() {
  const source = sharedImageState.source;
  if (!source) return;
  const dims = getSourceDimensions(source);
  if (!dims || !dims.width || !dims.height) return;

  const s = ditherSettings();
  const outW = Math.max(1, Math.round(dims.width / s.pixelScale));
  const outH = Math.max(1, Math.round(dims.height / s.pixelScale));

  targetDimsValue.textContent = `Export: ${dims.width}×${dims.height}px · dither blocks: ${outW}×${outH} @x${s.pixelScale}`;

  const work = document.createElement('canvas');
  work.width = outW;
  work.height = outH;
  const wCtx = work.getContext('2d', { willReadFrequently: true });
  wCtx.imageSmoothingEnabled = false;
  wCtx.drawImage(source, 0, 0, outW, outH);

  const imgData = wCtx.getImageData(0, 0, outW, outH);
  const data = imgData.data;
  const palette = buildExpandedPalette(DITHER_PALETTES[s.palette], s.paletteColors);
  const last = palette.length - 1;

  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const idx = (y * outW + x) * 4;
      if (data[idx + 3] === 0) { data[idx] = data[idx + 1] = data[idx + 2] = 0; continue; }

      const r = data[idx] / 255, g = data[idx + 1] / 255, b = data[idx + 2] / 255;
      const grey = r * 0.3 + g * 0.59 + b * 0.11;
      const c = (grey - 0.5) * s.contrast + 0.5;
      const br = Math.pow(clamp(c, 0, 1), s.brightness);
      const bayer = BAYER8[(y % 8) * 8 + (x % 8)];
      const filtered = clamp(br + (bayer - 32) * s.ditherStrength / 255, 0, 1);
      const qi = Math.round(filtered * last);
      data[idx] = palette[qi][0];
      data[idx + 1] = palette[qi][1];
      data[idx + 2] = palette[qi][2];
    }
  }

  wCtx.putImageData(imgData, 0, 0);

  resultCanvas.width = dims.width;
  resultCanvas.height = dims.height;
  resultCtx.imageSmoothingEnabled = false;
  resultCtx.clearRect(0, 0, dims.width, dims.height);
  resultCtx.drawImage(work, 0, 0, outW, outH, 0, 0, dims.width, dims.height);

  finalizeRender(dims);
}

// ============================================================
// Milk filter
// ============================================================

function processMilk() {
  const source = sharedImageState.source;
  if (!source) return;
  const dims = getSourceDimensions(source);
  if (!dims || !dims.width || !dims.height) return;

  const w = dims.width, h = dims.height;
  targetDimsValue.textContent = `Export: ${w}×${h}px`;

  const work = document.createElement('canvas');
  work.width = w;
  work.height = h;
  const wCtx = work.getContext('2d', { willReadFrequently: true });

  if (milkState.compression) {
    const level = MILK_COMPRESSION_LEVELS[milkState.compressionLevelIdx];
    const factor = Math.max(0.05, 1 - level / 110);
    const sw = Math.max(1, Math.round(w * factor));
    const sh = Math.max(1, Math.round(h * factor));
    const tmp = document.createElement('canvas');
    tmp.width = sw;
    tmp.height = sh;
    tmp.getContext('2d').drawImage(source, 0, 0, sw, sh);
    wCtx.imageSmoothingEnabled = false;
    wCtx.drawImage(tmp, 0, 0, sw, sh, 0, 0, w, h);
  } else {
    wCtx.drawImage(source, 0, 0, w, h);
  }

  const imgData = wCtx.getImageData(0, 0, w, h);
  const data = imgData.data;

  const key = MILK_PALETTE_KEYS[milkState.paletteIdx];
  const colors = MILK_PALETTES[key];
  const punt = milkState.pointillism ? 0.7 : 1.0;
  const mid1 = key === 'milk1' ? 120 : 90;
  const mid2 = key === 'milk1' ? 200 : 150;
  const mBri = MILK_LEVELS.brightness[milkState.brightnessIdx];
  const mCon = MILK_LEVELS.contrast[milkState.contrastIdx];
  const adjustBC = mBri !== 1.0 || mCon !== 1.0;

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    let brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (adjustBC) {
      brightness = ((brightness / 255 - 0.5) * mCon + 0.5) * 255;
      brightness = Math.pow(clamp(brightness / 255, 0, 1), mBri) * 255;
    }
    let c;
    if (brightness <= 25) {
      c = colors[0];
    } else if (brightness <= 70) {
      c = Math.random() < punt ? colors[0] : colors[1];
    } else if (brightness < mid1) {
      c = Math.random() < punt ? colors[1] : colors[0];
    } else if (brightness < mid2) {
      c = colors[1];
    } else if (brightness < 230) {
      c = Math.random() < punt ? colors[2] : colors[1];
    } else {
      c = colors[2];
    }
    data[i] = c[0];
    data[i + 1] = c[1];
    data[i + 2] = c[2];
  }

  wCtx.putImageData(imgData, 0, 0);

  resultCanvas.width = w;
  resultCanvas.height = h;
  resultCtx.drawImage(work, 0, 0);

  finalizeRender(dims);
}

// ============================================================
// Shared render finalization
// ============================================================

function finalizeRender(dims) {
  resultCanvas.style.removeProperty('image-rendering');
  if (activeFilter === 'dither') {
    resultCanvas.classList.add('render-pixelated');
  } else {
    resultCanvas.classList.remove('render-pixelated');
  }

  if (!sharedImageState.isVideo) {
    const snap = document.createElement('canvas');
    snap.width = dims.width;
    snap.height = dims.height;
    snap.getContext('2d').drawImage(resultCanvas, 0, 0);
    lastResultCanvas = snap;
  }

  fitResultCanvasDisplay();
  copyBtn.disabled = sharedImageState.isVideo;
  downloadBtn.disabled = false;
  downloadBtn.textContent = sharedImageState.isVideo ? t('saveVideo') : t('saveImage');
  syncMuteBtn();

  if (!isRecording) {
    statusText.textContent = sharedImageState.isVideo ? t('videoLoaded') : t('imageLoaded');
  }
}

function processImage() {
  if (activeFilter === 'dither') {
    processDither();
  } else {
    processMilk();
  }
}

// ============================================================
// UI sync
// ============================================================

function syncDitherUi() {
  const s = ditherSettings();
  document.getElementById('ditherBrightnessValue').textContent = String(ditherState.brightnessIdx);
  document.getElementById('ditherContrastValue').textContent = String(ditherState.contrastIdx);
  document.getElementById('ditherStrengthValue').textContent = String(ditherState.ditherStrengthIdx);
  document.getElementById('ditherPixelScaleValue').textContent = `x${s.pixelScale}`;
  document.getElementById('ditherPaletteColorsValue').textContent = String(s.paletteColors);
  document.getElementById('ditherPaletteValue').textContent = DITHER_PALETTE_LABELS[s.palette];
  renderPalettePreview('ditherPalettePreview', DITHER_PALETTES[s.palette]);

  const dims = getSourceDimensions(sharedImageState.source);
  if (!dims || !dims.width || !dims.height) {
    targetDimsValue.textContent = t('outputSize');
    return;
  }
  const outW = Math.max(1, Math.round(dims.width / s.pixelScale));
  const outH = Math.max(1, Math.round(dims.height / s.pixelScale));
  targetDimsValue.textContent = `Export: ${dims.width}×${dims.height}px · dither blocks: ${outW}×${outH} @x${s.pixelScale}`;
}

function syncMilkUi() {
  const key = MILK_PALETTE_KEYS[milkState.paletteIdx];
  document.getElementById('milkPaletteValue').textContent = MILK_PALETTE_LABELS[key];
  document.getElementById('milkBrightnessValue').textContent = String(milkState.brightnessIdx);
  document.getElementById('milkContrastValue').textContent = String(milkState.contrastIdx);
  document.getElementById('milkPointillismValue').textContent = milkState.pointillism ? t('on') : t('off');
  document.getElementById('milkCompressionValue').textContent = milkState.compression ? t('on') : t('off');
  document.getElementById('milkCompressionLevelValue').textContent = String(MILK_COMPRESSION_LEVELS[milkState.compressionLevelIdx]);
  document.getElementById('milkCompressionLevelRow').style.display = milkState.compression ? 'flex' : 'none';
  renderPalettePreview('milkPalettePreview', MILK_PALETTES[key]);
}

// ============================================================
// Step handlers
// ============================================================

function stepDitherSetting(setting, dir) {
  if (setting === 'palette') {
    ditherState.paletteIdx = wrapIndex(ditherState.paletteIdx + dir, DITHER_PALETTE_KEYS.length);
    const palSize = DITHER_PALETTES[DITHER_PALETTE_KEYS[ditherState.paletteIdx]].length;
    const colorIdx = DITHER_LEVELS.paletteColors.indexOf(palSize);
    if (colorIdx !== -1) ditherState.paletteColorsIdx = colorIdx;
  }
  if (setting === 'brightness') ditherState.brightnessIdx = clampIndex(ditherState.brightnessIdx + dir, DITHER_LEVELS.brightness.length);
  if (setting === 'contrast') ditherState.contrastIdx = clampIndex(ditherState.contrastIdx + dir, DITHER_LEVELS.contrast.length);
  if (setting === 'ditherStrength') ditherState.ditherStrengthIdx = clampIndex(ditherState.ditherStrengthIdx + dir, DITHER_LEVELS.ditherStrength.length);
  if (setting === 'pixelScale') ditherState.pixelScaleIdx = clampIndex(ditherState.pixelScaleIdx + dir, DITHER_LEVELS.pixelScale.length);
  if (setting === 'paletteColors') ditherState.paletteColorsIdx = clampIndex(ditherState.paletteColorsIdx + dir, DITHER_LEVELS.paletteColors.length);
  syncDitherUi();
  if (sharedImageState.source) processImage();
}

function stepMilkSetting(setting, dir) {
  if (setting === 'milkPalette') milkState.paletteIdx = wrapIndex(milkState.paletteIdx + dir, MILK_PALETTE_KEYS.length);
  if (setting === 'milkBrightness') milkState.brightnessIdx = clampIndex(milkState.brightnessIdx + dir, MILK_LEVELS.brightness.length);
  if (setting === 'milkContrast') milkState.contrastIdx = clampIndex(milkState.contrastIdx + dir, MILK_LEVELS.contrast.length);
  if (setting === 'pointillism') milkState.pointillism = !milkState.pointillism;
  if (setting === 'compression') milkState.compression = !milkState.compression;
  if (setting === 'compressionLevel') milkState.compressionLevelIdx = clampIndex(milkState.compressionLevelIdx + dir, MILK_COMPRESSION_LEVELS.length);
  syncMilkUi();
  if (sharedImageState.source) processImage();
}

// ============================================================
// Magnifier
// ============================================================

function drawMagnifier(event) {
  if (!resultCanvas.width || !resultCanvas.height) return;
  const rect = resultCanvas.getBoundingClientRect();
  const vpRect = resultViewport.getBoundingClientRect();
  const mx = event.clientX - rect.left;
  const my = event.clientY - rect.top;

  if (mx < 0 || my < 0 || mx > rect.width || my > rect.height) {
    magnifierLens.style.display = 'none';
    return;
  }
  magnifierLens.style.display = 'block';

  const isTouch = event.pointerType === 'touch';
  const offY = isTouch ? -(MAGNIFIER_SIZE * 0.9) : 0;
  magnifierLens.style.left = `${event.clientX - vpRect.left + resultViewport.scrollLeft - MAGNIFIER_SIZE / 2}px`;
  magnifierLens.style.top = `${event.clientY - vpRect.top + resultViewport.scrollTop - MAGNIFIER_SIZE / 2 + offY}px`;

  const ix = (mx / rect.width) * resultCanvas.width;
  const iy = (my / rect.height) * resultCanvas.height;
  const ss = MAGNIFIER_SIZE / MAGNIFIER_SCALE;
  const sx = clamp(ix - ss / 2, 0, resultCanvas.width - ss);
  const sy = clamp(iy - ss / 2, 0, resultCanvas.height - ss);

  magnifierCtx.imageSmoothingEnabled = false;
  magnifierCtx.clearRect(0, 0, MAGNIFIER_SIZE, MAGNIFIER_SIZE);
  magnifierCtx.drawImage(resultCanvas, sx, sy, ss, ss, 0, 0, MAGNIFIER_SIZE, MAGNIFIER_SIZE);
}

// ============================================================
// Display fitting
// ============================================================

function fitResultCanvasDisplay() {
  const nw = resultCanvas.width, nh = resultCanvas.height;
  if (!nw || !nh) return;

  const article = resultViewport.parentElement;
  const hardCap = Math.max(120, document.documentElement.clientWidth - 24);
  const maxW = Math.min(hardCap, Math.max(120, (article.clientWidth || 600) - 4));
  const cssMaxH = parseFloat(getComputedStyle(resultViewport).maxHeight) || (window.innerHeight * 0.82);
  const maxH = Math.max(120, cssMaxH);

  const scale = clamp(Math.min(maxW / nw, maxH / nh), 0.05, 6);
  const dw = Math.round(nw * scale);
  const dh = Math.round(nh * scale);

  resultCanvas.style.width = `${dw}px`;
  resultCanvas.style.height = `${dh}px`;
  resultViewport.style.width = `${dw}px`;
  resultViewport.style.height = `${dh}px`;
}

// ============================================================
// Download / copy
// ============================================================

async function copyResult() {
  if (!lastResultCanvas || sharedImageState.isVideo) return;
  if (!navigator.clipboard || !window.ClipboardItem) {
    statusText.textContent = t('clipboardNA');
    return;
  }
  const blob = await canvasToBlob(lastResultCanvas);
  if (!blob) { statusText.textContent = t('clipboardFail'); return; }
  try {
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    statusText.textContent = t('clipboardOk');
  } catch {
    statusText.textContent = t('clipboardDenied');
  }
}

function downloadImage() {
  if (!lastResultCanvas) return;
  const link = document.createElement('a');
  link.download = `${activeFilter}-filter-result.png`;
  link.href = lastResultCanvas.toDataURL('image/png');
  link.click();
}

async function downloadVideo() {
  const video = sharedImageState.source;
  if (!video || !sharedImageState.isVideo) return;
  if (isRecording) { isRecording = false; downloadBtn.disabled = false; return; }
  if (typeof resultCanvas.captureStream !== 'function' || typeof MediaRecorder === 'undefined') {
    statusText.textContent = t('recordNA'); return;
  }

  isRecording = true;
  downloadBtn.disabled = true;
  setControlsLocked(true);
  statusText.textContent = t('recording');
  showProgress(0);

  const wasLoop = video.loop;
  const wasMuted = video.muted;

  try {
    const audioEl = document.createElement('video');
    audioEl.src = sharedImageState.objectUrl || video.src;
    audioEl.muted = false;
    audioEl.playsInline = true;
    audioEl.preload = 'auto';

    await new Promise((resolve, reject) => {
      audioEl.addEventListener('canplaythrough', resolve, { once: true });
      audioEl.addEventListener('error', () => reject(new Error('clone load failed')), { once: true });
      audioEl.load();
    });

    const canvasStream = resultCanvas.captureStream(30);
    const videoTrack = canvasStream.getVideoTracks()[0];

    let audioTrack = null;
    try { const s = audioEl.captureStream(); audioTrack = s.getAudioTracks()[0] || null; } catch {}
    if (!audioTrack && typeof audioEl.mozCaptureStream === 'function') {
      try { const s = audioEl.mozCaptureStream(); audioTrack = s.getAudioTracks()[0] || null; } catch {}
    }
    if (!audioTrack) {
      try {
        const actx = new AudioContext();
        await actx.resume();
        const src = actx.createMediaElementSource(audioEl);
        const dest = actx.createMediaStreamDestination();
        src.connect(dest);
        src.connect(actx.destination);
        audioTrack = dest.stream.getAudioTracks()[0] || null;
      } catch {}
    }

    const combinedStream = new MediaStream(audioTrack ? [videoTrack, audioTrack] : [videoTrack]);
    const mimeType = pickVideoMime(!!audioTrack);
    if (!mimeType) { statusText.textContent = t('noFormat'); return; }

    const bitrate = clamp(Math.round(resultCanvas.width * resultCanvas.height * 15), 8e6, 80e6);
    let rec;
    try {
      rec = new MediaRecorder(combinedStream, { mimeType, videoBitsPerSecond: bitrate });
    } catch {
      rec = new MediaRecorder(new MediaStream([videoTrack]), { mimeType: pickVideoMime(false), videoBitsPerSecond: bitrate });
    }

    const chunks = [];
    rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    const stopped = new Promise((r) => { rec.onstop = r; });

    video.loop = false;
    video.muted = true;
    video.currentTime = 0;
    audioEl.currentTime = 0;

    const onEnd = () => { try { rec.stop(); } catch {} };
    video.addEventListener('ended', onEnd, { once: true });
    const onTime = () => { if (video.duration > 0) showProgress((video.currentTime / video.duration) * 100); };
    video.addEventListener('timeupdate', onTime);

    rec.start();
    await Promise.all([
      video.play(),
      audioEl.play().catch(() => { audioEl.muted = true; return audioEl.play(); })
    ]);
    await stopped;

    video.removeEventListener('ended', onEnd);
    video.removeEventListener('timeupdate', onTime);
    audioEl.pause();
    audioEl.src = '';

    if (chunks.length > 0) {
      const blob = new Blob(chunks, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${activeFilter}-filter-result.${mimeType.includes('mp4') ? 'mp4' : 'webm'}`;
      link.href = url;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      statusText.textContent = t('videoSaved');
    }
  } catch {
    statusText.textContent = t('recordNA');
  } finally {
    video.loop = wasLoop;
    video.muted = wasMuted;
    video.currentTime = 0;
    video.play().catch(() => { video.muted = true; video.play().catch(() => {}); });
    isRecording = false;
    downloadBtn.disabled = false;
    setControlsLocked(false);
    showProgress(100);
    setTimeout(hideProgress, 500);
  }
}

function pickVideoMime(hasAudio) {
  const candidates = hasAudio
    ? ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm', 'video/mp4']
    : ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm', 'video/mp4'];
  for (const c of candidates) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported?.(c)) return c;
  }
  return null;
}

// ============================================================
// Init
// ============================================================

(function init() {
  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.dataset.filter === activeFilter) return;
      activeFilter = tab.dataset.filter;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.getElementById('ditherSettings').style.display = activeFilter === 'dither' ? '' : 'none';
      document.getElementById('milkSettings').style.display = activeFilter === 'milk' ? '' : 'none';
      if (sharedImageState.source) processImage();
    });
  });

  // Step buttons
  document.querySelectorAll('.step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      const setting = btn.dataset.setting;
      const dir = Number(btn.dataset.dir);
      if (tool === 'dither') stepDitherSetting(setting, dir);
      else if (tool === 'milk') stepMilkSetting(setting, dir);

      const row = btn.closest('.setting-row');
      if (row) {
        row.classList.remove('changed');
        requestAnimationFrame(() => {
          row.classList.add('changed');
          setTimeout(() => row.classList.remove('changed'), 220);
        });
      }
    });
  });

  // Reset
  resetAllBtn.addEventListener('click', () => {
    if (activeFilter === 'dither') {
      Object.assign(ditherState, ditherDefault);
      syncDitherUi();
    } else {
      Object.assign(milkState, milkDefault);
      syncMilkUi();
    }
    if (sharedImageState.source) processImage();
    statusText.textContent = t('resetDone');
  });

  // Copy / download / mute
  copyBtn.addEventListener('click', copyResult);
  downloadBtn.addEventListener('click', () => {
    if (sharedImageState.isVideo) downloadVideo();
    else downloadImage();
  });
  muteBtn.addEventListener('click', toggleMute);

  // Magnifier
  resultViewport.addEventListener('pointerdown', (e) => {
    if (!resultCanvas.width || !resultCanvas.height) return;
    resultViewport.setPointerCapture(e.pointerId);
    magnifierLens.style.display = 'block';
    drawMagnifier(e);
  });
  resultViewport.addEventListener('pointermove', (e) => {
    if (!resultCanvas.width || !resultCanvas.height) return;
    if (e.pointerType === 'mouse' || e.pressure > 0) drawMagnifier(e);
  });
  resultViewport.addEventListener('pointerup', (e) => {
    if (resultViewport.hasPointerCapture(e.pointerId)) resultViewport.releasePointerCapture(e.pointerId);
    if (e.pointerType !== 'mouse') magnifierLens.style.display = 'none';
  });
  resultViewport.addEventListener('pointerleave', () => { magnifierLens.style.display = 'none'; });

  // Resize
  window.addEventListener('resize', () => {
    if (resultCanvas.width && resultCanvas.height) fitResultCanvasDisplay();
  });

  // File input
  const fileInput = document.getElementById('bayerImageInput');
  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (file) await loadSharedMediaFile(file);
  });

  // Drag & drop
  document.addEventListener('dragenter', () => document.body.classList.add('dragging-image'));
  document.addEventListener('dragover', (e) => e.preventDefault());
  document.addEventListener('dragleave', (e) => { if (e.relatedTarget === null) document.body.classList.remove('dragging-image'); });
  document.addEventListener('dragend', () => document.body.classList.remove('dragging-image'));
  document.addEventListener('drop', async (e) => {
    e.preventDefault();
    document.body.classList.remove('dragging-image');
    const file = getDroppedMediaFile(e.dataTransfer);
    if (file) await loadSharedMediaFile(file);
  });

  // Paste
  document.addEventListener('paste', async (e) => {
    const file = getPastedMediaFile(e.clipboardData);
    if (!file) return;
    e.preventDefault();
    await loadSharedMediaFile(file);
  });

  // Initial UI sync
  syncDitherUi();
  syncMilkUi();
})();
