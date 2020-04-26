import React from "react";
import PropTypes from "prop-types";
import { Toolbar } from "@material-ui/core";

import { useStyles } from "./style";
import { IconLogo } from "@icons";
import { Menu } from "@/components/molecules";

const Navigation = ({ onNavigate }) => {
	const classes = useStyles();

	return (
		<Toolbar disableGutters>
			<div className={classes.logo}>
				<IconLogo />
			</div>
			{onNavigate && <Menu onItemClick={onNavigate} />}
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
