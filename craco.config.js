const path = require("path");

const pathSrc = path.resolve(__dirname, "src/");
const pathIcons = path.resolve(__dirname, "src/components/atoms/Icons");

module.exports = {
	webpack: {
		alias: {
			"@": pathSrc,
			"@icons": pathIcons
		}
	},
	babel: {
		plugins: [
			[
				"babel-plugin-import",
				{
					libraryName: "@material-ui/core",
					libraryDirectory: "esm",
					camel2DashComponentName: false
				},
				"core"
			],
			[
				"babel-plugin-import",
				{
					libraryName: "@material-ui/icons",
					libraryDirectory: "esm",
					camel2DashComponentName: false
				},
				"icons"
			]
		]
	}
};
