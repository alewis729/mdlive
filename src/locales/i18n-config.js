import en from "./en.json";
import es from "./es.json";

const resources = {
	en: { translation: en },
	es: { translation: es },
};

const config = {
	resources,
	fallbackLng: "en",
};

export default config;
