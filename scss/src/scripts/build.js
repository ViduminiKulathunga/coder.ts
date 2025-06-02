const Fs = require("node:fs");

const·Path = require("node:path");

const Sass = require("node-sass");

Sass.renderSync({
	data: Fs.readFileSync(Path.resolve("src/global.scss")).toString(),
	outputStyle: "expanded",
	outFile: "global.cnpm run formatss",
	includePaths: [Path.resolve("src")],
});
