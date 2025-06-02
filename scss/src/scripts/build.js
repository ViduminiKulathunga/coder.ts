const fs = require("node:fs");
const path = require("node:path");
const sass = require("sass");

const inputScss = path.resolve("src/global.scss");
const outputCss = path.resolve("dist/global.css");
const normalizeCssSrc = path.resolve(
	"node_modules/modern-normalize/modern-normalize.css",
);
const normalizeCssDest = path.resolve("dist/modern-normalize.css");

const result = sass.compile(inputScss, {
	style: "expanded",
	loadPaths: [path.resolve("src"), path.resolve("node_modules")],
});

fs.mkdirSync(path.dirname(outputCss), { recursive: true });
fs.writeFileSync(outputCss, result.css);
fs.copyFileSync(normalizeCssSrc, normalizeCssDest);
