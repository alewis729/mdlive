const yenv = require("yenv");
const env = yenv();
const path = require("path");
const pathSrc = path.resolve(__dirname, "src");
const IconsSrc = path.resolve(__dirname, "src/components/atoms/Icons");

const nextConfig = {
	publicRuntimeConfig: {
		APP_URL: env.APP_URL,
		SERVER_URL: env.SERVER_URL,
		DEV_MODE: env.DEV_MODE,
	},
	webpack: config => {
		config.resolve.alias["@"] = pathSrc;
		config.resolve.alias["@icons"] = IconsSrc;

		return config;
	},
};

module.exports = nextConfig;
