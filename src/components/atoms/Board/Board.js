import React from "react";
import PropTypes from "prop-types";
import { Box, Paper } from "@material-ui/core";

import { useStyles } from "./style";

const Board = ({ children, ...props }) => {
	const classes = useStyles();

	return (
		<Paper className={classes.root} {...props}>
			<Box p={1}>{children}</Box>
		</Paper>
	);
};

Board.propTypes = {
	children: PropTypes.node.isRequired,
};

Board.defaultProps = {
	elevation: 3,
};

export default Board;
