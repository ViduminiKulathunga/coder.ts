const fs = require("node:fs");
const path = require("node:path");
const sass = require("sass");

const getComponents = () => {
	let allComponents = [];
	const types = ["atoms", "molecules", "organisom"];

	for (const type of types) {
		const allFiles = fs.readdirSync(`scss/src/${type}`).map((file) => ({
			input: `scss/src/${type}/${file}`,
			output: `scss/src/lib/${file.slice(0, -4)}.css`,
		}));

		allComponents = [...allComponents, ...allFiles];
	}

	return allComponents;
};

const compile = (pathFile, fileName) => {
	const sassResult = sass.compile(pathFile, {
		style: "expanded",
		loadPaths: [path.resolve("scss/src"), path.resolve("node_modules")],
	});

	fs.mkdirSync(path.dirname(fileName), { recursive: true });
	fs.writeFileSync(fileName, sassResult.css.toString());
};

const pathFile = path.resolve("scss/src/global.scss");
const fileName = path.resolve("scss/src/lib/global.css");

compile(pathFile, fileName);

const components = getComponents();
for (const component of components) {
	compile(component.input, component.output);
}
