import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import toIco from "to-ico";

const brandDir = join(process.cwd(), "public", "brand");
const ICON_SIZES = [180, 512, 1024];

function renderSvgToPng(svgPath, width) {
  const svg = readFileSync(svgPath);
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    background: "transparent",
  });
  return resvg.render().asPng();
}

function squareBaseName(file) {
  return file.replace(/\.svg$/, "");
}

function writePngSet(svgFile, sizes) {
  const svgPath = join(brandDir, svgFile);
  const base = squareBaseName(svgFile);
  const fullPng = renderSvgToPng(svgPath, sizes[sizes.length - 1]);
  writeFileSync(join(brandDir, `${base}.png`), fullPng);
  for (const size of sizes) {
    const png = renderSvgToPng(svgPath, size);
    writeFileSync(join(brandDir, `${base}-${size}.png`), png);
  }
}

function writeWideSvg(svgFile) {
  const svgPath = join(brandDir, svgFile);
  const base = squareBaseName(svgFile);
  const width = 2000;
  const png = renderSvgToPng(svgPath, width);
  writeFileSync(join(brandDir, `${base}.png`), png);
}

const squareSvgs = readdirSync(brandDir).filter((f) =>
  /^ratesboard-(icon|mark)-.+\.svg$/.test(f),
);
for (const svg of squareSvgs) {
  writePngSet(svg, ICON_SIZES);
}

for (const svg of ["ratesboard-lockup-color.svg", "ratesboard-lockup-reversed.svg"]) {
  writeWideSvg(svg);
}

for (const svg of [
  "ratesboard-wordmark-color.svg",
  "ratesboard-wordmark-reversed.svg",
  "ratesboard-wordmark-mono.svg",
  "ratesboard-wordmark-mono-white.svg",
]) {
  writeWideSvg(svg);
}

async function makeFavicon() {
  const iconSvg = join(brandDir, "ratesboard-icon-color.svg");
  const sizes = [16, 32, 48];
  const buffers = sizes.map((size) => renderSvgToPng(iconSvg, size));
  const ico = await toIco(buffers);
  writeFileSync(join(brandDir, "favicon.ico"), ico);
  writeFileSync(join(process.cwd(), "public", "favicon.ico"), ico);
}

async function makeOgImage() {
  const wmSvg = join(brandDir, "ratesboard-wordmark-color.svg");
  const wmPng = renderSvgToPng(wmSvg, 900);
  const wmMeta = await sharp(wmPng).metadata();
  const wmHeight = wmMeta.height ?? 157;
  const wmWidth = wmMeta.width ?? 900;
  const maxW = 960;
  const scale = Math.min(1, maxW / wmWidth);
  const scaledW = Math.round(wmWidth * scale);
  const scaledH = Math.round(wmHeight * scale);
  const wmScaled = await sharp(wmPng).resize(scaledW, scaledH).png().toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: wmScaled, gravity: "center" }])
  .png()
    .toFile(join(brandDir, "ratesboard-og.png"));
}

await makeFavicon();
await makeOgImage();
console.log("Brand PNGs, favicon.ico, and OG image generated.");