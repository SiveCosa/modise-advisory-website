import fs from "node:fs";

const b64 = fs.readFileSync("public/assets/logos/favicon-mark.png").toString("base64");

function createFaviconSvg(size) {
  const inset = size * 0.03125;
  const markSize = size * 0.9375;

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${size} ${size}" role="img" aria-label="Modise Advisory Group">
  <rect width="${size}" height="${size}" fill="#1b2e4b" />
  <image xlink:href="data:image/png;base64,${b64}" x="${inset}" y="${inset}" width="${markSize}" height="${markSize}" preserveAspectRatio="xMidYMid meet" />
</svg>`;
}

fs.writeFileSync("src/app/icon.svg", createFaviconSvg(32));
fs.writeFileSync("src/app/apple-icon.svg", createFaviconSvg(180));
fs.writeFileSync("public/assets/logos/favicon.svg", createFaviconSvg(32));

console.log("Generated embedded favicon SVG files");
