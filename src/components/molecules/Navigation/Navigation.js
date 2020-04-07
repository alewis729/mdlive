import React from "react";
import PropTypes from "prop-types";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import { Button } from "@components/atoms";
import { Menu } from "@components/molecules";

import { useStyles } from "./style";

const Navigation = ({ onNavigate, onMainButtonClick }) => {
	const classes = useStyles();

	return (
		<>
			<Toolbar />
			<AppBar className={classes.appBar}>
				<Container>
					<Toolbar>
						<Menu onItemClick={onNavigate} />
						<Button onClick={onMainButtonClick}>Sign in</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

Navigation.propTypes = {
	onNavigate: PropTypes.func.isRequired,
	onMainButtonClick: PropTypes.func.isRequired,
};

export default Navigation;
