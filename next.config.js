const path = require("path");
const pathSrc = path.resolve(__dirname, "src");
const IconsSrc = path.resolve(__dirname, "src/components/atoms/Icons");

module.exports = {
	webpack: config => {
		config.resolve.alias["@"] = pathSrc;
		config.resolve.alias["@icons"] = IconsSrc;

		return config;
	},
};
