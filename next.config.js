const path = require("path");
const pathSrc = path.resolve(__dirname, "src");

module.exports = {
	webpack: (config) => {
		config.resolve.alias["@"] = pathSrc;

		return config;
	},
};
