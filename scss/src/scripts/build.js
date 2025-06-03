const fs = require("node:fs");
const path = require("node:path");
const sass = require("sass");

const normalizeCSSPath = require.resolve(
	"modern-normalize/modern-normalize.css",
);
const normalizeCSS = fs.readFileSync(normalizeCSSPath, "utf8");

const getComponents = () => {
	let allComponents = [];
	const types = ["atoms", "molecules", "organisom"];

	types.forEach((type) => {
		const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
			input: `src/${type}/${file}`,
			output: `src/lib/${file.slice(0, -4) + "css"}`,
		}));

		allComponents = [...allComponents, ...allFiles];
	});

	return allComponents;
};

const compile = (pathFile, fileName) => {
	const sassResult = sass.compile(pathFile, {
		style: "expanded",
		loadPaths: [path.resolve("src"), path.resolve("node_modules")],
	});

	const finalCSS = `${normalizeCSS}\n\n${sassResult.css.toString()}`;

	fs.mkdirSync(path.dirname(fileName), { recursive: true });
	fs.writeFileSync(fileName, finalCSS);
};

const pathFile = path.resolve("src/global.scss");
const fileName = path.resolve("src/lib/global.css");

compile(pathFile, fileName);

getComponents().forEach((component) => {
	compile(component.input, component.output);
});
