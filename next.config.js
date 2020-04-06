const path = require("path");
const pathSrc = path.resolve(__dirname, "src");
const pathComponents = path.resolve(__dirname, "src/components");
const pathContainers = path.resolve(__dirname, "src/containers");

module.exports = {
	webpack: config => {
		config.resolve.alias["@"] = pathSrc;
		config.resolve.alias["@components"] = pathComponents;
		config.resolve.alias["@containers"] = pathContainers;

		return config;
	}
};
