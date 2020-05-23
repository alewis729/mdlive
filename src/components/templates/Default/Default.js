import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
	Container,
	Toolbar,
	AppBar,
	Box,
	LinearProgress,
} from "@material-ui/core";

import { useStyles } from "./style";

const Default = ({ header, footer, children }) => {
	const classes = useStyles();
	const { loading } = useSelector(state => state.settings);

	return (
		<Container className={classes.root}>
			<div>
				<Toolbar />
				<AppBar className={classes.appBar} position="fixed" color="inherit">
					<Container maxWidth="xl">{header}</Container>
					{loading && <LinearProgress />}
				</AppBar>
			</div>
			<Container className={classes.main} component="main" maxWidth="xl">
				<Box py={6}>{children}</Box>
			</Container>
			<div className={classes.footer}>
				<Container maxWidth="xl">{footer}</Container>
			</div>
		</Container>
	);
};

Default.propTypes = {
	header: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
	children: PropTypes.any,
};

export default Default;
