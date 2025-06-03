const fs = require("node:fs");
const path = require("node:path");
const sass = require("sass");

const getComponents = () => {
	let allComponents = [];
	const types = ["atoms", "molecules", "organisom"];

	for (const type of types) {
		const dirPath = path.resolve(__dirname, `../${type}`);
		if (!fs.existsSync(dirPath)) continue;

		const files = fs
			.readdirSync(dirPath)
			.filter((file) => file.endsWith(".scss"));
		const allFiles = files.map((file) => ({
			input: path.resolve(dirPath, file),
			output: path.resolve(
				__dirname,
				`../lib/${file.replace(/\.scss$/, ".css")}`,
			),
		}));

		allComponents = [...allComponents, ...allFiles];
	}

	return allComponents;
};

const compile = (pathFile, fileName) => {
	const sassResult = sass.compile(pathFile, {
		style: "expanded",
		loadPaths: [path.resolve(__dirname, "../"), path.resolve("node_modules")],
	});

	fs.mkdirSync(path.dirname(fileName), { recursive: true });
	fs.writeFileSync(fileName, sassResult.css.toString());
};

const pathFile = path.resolve(__dirname, "../global.scss");
const fileName = path.resolve(__dirname, "../lib/global.css");

compile(pathFile, fileName);

const components = getComponents();
for (const component of components) {
	compile(component.input, component.output);
}
