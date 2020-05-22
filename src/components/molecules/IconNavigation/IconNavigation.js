import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
	Grid,
	Menu,
	MenuItem,
	Typography,
	Tooltip,
	IconButton,
} from "@material-ui/core";
import {
	Brightness4Rounded as IconNight,
	Brightness7Rounded as IconDay,
	AddCircleRounded as IconNew,
	TranslateRounded as IconLang,
} from "@material-ui/icons";

import { changeTheme, changeLang } from "@/store/actions";
import { useStyles } from "./style";

const menuLanguages = [
	{ locale: "en", label: "English" },
	{ locale: "es", label: "Español" },
	{ locale: "gr", label: "Ελληνικά" },
];

const Navigation = ({ onNewRoom }) => {
	const classes = useStyles();
	const { theme, languages } = useSelector(state => state.settings);
	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleLanguageChange = locale => {
		const newLang = languages.find(lang => lang === locale);
		handleClose();

		if (newLang) {
			i18n.changeLanguage(newLang);
			dispatch(changeLang(newLang));
		}
	};

	const handleClose = () => setAnchorEl(null);

	const toggleTheme = () => dispatch(changeTheme());

	return (
		<Grid container spacing={1}>
			<Grid item>
				<Tooltip title={t("navigation.changeLang")} placement="bottom">
					<IconButton onClick={e => setAnchorEl(e.currentTarget)}>
						<IconLang />
					</IconButton>
				</Tooltip>
				<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
					{menuLanguages.map(({ locale, label }) => (
						<MenuItem
							key={locale}
							keepMounted
							className={classes.menuItem}
							onClick={() => handleLanguageChange(locale)}
						>
							<Typography variant="inherit" noWrap>
								{label}
							</Typography>
						</MenuItem>
					))}
				</Menu>
			</Grid>
			<Grid item>
				<Tooltip title={t("navigation.toggleTheme")} placement="bottom">
					<IconButton onClick={toggleTheme}>
						{theme === "light" ? <IconNight /> : <IconDay />}
					</IconButton>
				</Tooltip>
			</Grid>
			{onNewRoom && (
				<Grid item>
					<Tooltip title={t("navigation.newRoom")} placement="bottom">
						<IconButton onClick={onNewRoom}>
							<IconNew />
						</IconButton>
					</Tooltip>
				</Grid>
			)}
		</Grid>
	);
};

Navigation.propTypes = {
	onNewRoom: PropTypes.func,
};

Navigation.defaultProps = {
	onNewRoom: null,
};

export default Navigation;
