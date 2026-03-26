const path = require("path");

let PDFMerger;
try {
  // Try ESM import
  PDFMerger = require("pdf-merger-js").default;
} catch {
  // Fallback for CommonJS
  PDFMerger = require("pdf-merger-js");
}

async function mergePdfs(p1, p2) {
  const merger = new PDFMerger();
  await merger.add(p1);
  await merger.add(p2);
  const outputPath = path.join(__dirname, "public/merged.pdf");
  await merger.save(outputPath);
  console.log(" PDFs merged successfully at:", outputPath);
}

module.exports = { mergePdfs };
