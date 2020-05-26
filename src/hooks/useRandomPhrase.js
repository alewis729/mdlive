import { useRef } from "react";
import { useTranslation } from "react-i18next";

const randomElmFrom = arr => arr[Math.floor(Math.random() * arr.length)];

const useRandomPhrase = () => {
	const { t } = useTranslation();
	const adjectives = t("greet.adjectives", { returnObjects: true });

	const getPhrase = () =>
		`## ${t("greet.hello")} ${randomElmFrom(adjectives)} ${t(
			"greet.human"
		)} 😃\n\n${t("greet.justType")}`;

	const getNewPhrase = () => {
		phraseRef.current = getPhrase();
		return phraseRef.current;
	};

	const phraseRef = useRef(getPhrase());

	return [phraseRef.current, getNewPhrase];
};

export default useRandomPhrase;
