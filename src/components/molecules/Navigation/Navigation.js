import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Box } from "@material-ui/core";

import { useStyles } from "./style";
import { Button } from "@/components/atoms";
import { Menu } from "@/components/molecules";

const Navigation = ({ onNavigate, onMainButtonClick }) => {
	const classes = useStyles();

	return (
		<Toolbar disableGutters>
			<div className={classes.logo}>
				<div></div>
			</div>
			<Menu onItemClick={onNavigate} />
			<Box ml={3}>
				<Button onClick={onMainButtonClick}>Sign in</Button>
			</Box>
		</Toolbar>
	);
};

Navigation.propTypes = {
	onNavigate: PropTypes.func.isRequired,
	onMainButtonClick: PropTypes.func.isRequired,
};

export default Navigation;
