import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Toolbar } from "@material-ui/core";

import { changeTheme } from "@/store/actions";
import { useStyles } from "./style";
import { IconLogo, IconLogoLight } from "@icons";
import { Menu } from "@/components/molecules";

const Navigation = ({ onNavigate, ...props }) => {
	const classes = useStyles();
	const theme = useSelector(state => state.settings.theme);
	const dispatch = useDispatch();

	const handleMenuItemClick = action => {
		if (onNavigate) onNavigate(action);
		if (action === "toggle-theme") dispatch(changeTheme());
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
	onNavigate: PropTypes.func,
};

Navigation.defaultProps = {
	onNavigate: null,
};

export default Navigation;
