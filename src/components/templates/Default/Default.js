import React from "react";
import PropTypes from "prop-types";
import { Container, Toolbar, AppBar, Box } from "@material-ui/core";

import { useStyles } from "./style";

const Default = ({ header, footer, children }) => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<div>
				<Toolbar />
				<AppBar className={classes.appBar} position="fixed">
					<Container maxWidth="xl">{header}</Container>
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
	children: PropTypes.any.isRequired,
};

export default Default;
