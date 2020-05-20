import { useTranslation } from "react-i18next";

const randomElmFrom = arr => arr[Math.floor(Math.random() * arr.length)];

const useRandomPhrase = () => {
	const { t } = useTranslation();
	const adjectives = t("greet.adjectives", { returnObjects: true });

	return `## ${t("greet.hello")} ${randomElmFrom(adjectives)} ${t(
		"greet.human"
	)} 😃\n\n${t("greet.justType")}`;
};

export default useRandomPhrase;
