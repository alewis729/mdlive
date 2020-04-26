import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeTheme } from "@/store/actions";

const ThemeSetter = () => {
	const theme = useSelector(state => state.settings.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		setTheme();
		// eslint-disable-next-line
	}, []);

	const setTheme = () => {
		const localDarkMode = localStorage.getItem("darkMode") === "true";
		const localTheme = localDarkMode ? "dark" : "light";
		if (localTheme !== theme) dispatch(changeTheme());
	};

	return null;
};

export default ThemeSetter;
