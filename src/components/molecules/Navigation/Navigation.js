import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Toolbar } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { changeTheme, changeLang } from "@/store/actions";
import { useStyles } from "./style";
import { IconLogo, IconLogoLight } from "@icons";
import { Menu } from "@/components/molecules";

const Navigation = ({ onNavigate, ...props }) => {
	const classes = useStyles();
	const { theme, languages, currentLang } = useSelector(
		(state) => state.settings
	);
	const dispatch = useDispatch();
	const { i18n } = useTranslation();

	const handleMenuItemClick = (action) => {
		if (onNavigate) onNavigate(action);
		if (action === "toggle-theme") dispatch(changeTheme());
		if (action === "change-language") {
			const newLang = languages[1 - languages.indexOf(currentLang)];
			i18n.changeLanguage(newLang);
			dispatch(changeLang(newLang));
		}
	};

	return (
		<Toolbar disableGutters>
			<div className={classes.logo}>
				{theme === "light" && <IconLogo />}
				{theme === "dark" && <IconLogoLight />}
			</div>
			<Menu onItemClick={handleMenuItemClick} {...props} />
		</Toolbar>
	);
};

Navigation.propTypes = {
	onNavigate: PropTypes.func
};

Navigation.defaultProps = {
	onNavigate: null
};

export default Navigation;
