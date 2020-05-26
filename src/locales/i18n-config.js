import en from "./en.json";
import es from "./es.json";
import gr from "./gr.json";

const resources = {
	en: { translation: en },
	es: { translation: es },
	gr: { translation: gr },
};

const config = {
	resources,
	fallbackLng: "en",
};

export default config;
