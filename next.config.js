const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const path = require("path");
const pathSrc = path.resolve(__dirname, "src");
const IconsSrc = path.resolve(__dirname, "src/components/atoms/Icons");

const nextConfig = {
	publicRuntimeConfig: {
		APP_URL: process.env.APP_URL,
		PORT: process.env.PORT,
	},
	webpack: config => {
		config.resolve.alias["@"] = pathSrc;
		config.resolve.alias["@icons"] = IconsSrc;

		return config;
	},
};

module.exports = withBundleAnalyzer(nextConfig);
