const fs = require("node:fs");
const path = require("node:path");
const sass = require("sass");

const inputPath = path.resolve("src/global.scss");
const outputPath = path.resolve("dist/global.css");

const result = sass.compile(inputPath, {
	style: "expanded",
	loadPaths: [path.resolve("src"), path.resolve("node_modules")],
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, result.css);
