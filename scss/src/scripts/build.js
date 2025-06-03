const fs = require("node:fs");
const path = require("node:path");
const sass = require("sass");

const inputPath = path.resolve("src/global.scss");
const outputPath = path.resolve("src/lib/global.css");

const normalizeCSS = fs.readFileSync(
	path.resolve("node_modules/normalize.css/normalize.css"),
	"utf8",
);

const sassResult = sass.compile(inputPath, {
	style: "expanded",
	loadPaths: [path.resolve("src"), path.resolve("node_modules")],
});

const finalCSS = `${normalizeCSS}\n\n${sassResult.css.toString()}`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, finalCSS);
