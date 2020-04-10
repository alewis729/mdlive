import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Box } from "@material-ui/core";

import { useStyles } from "./style";
import { Board } from "@/components/atoms";

const Viewer = ({ preview }) => {
	const classes = useStyles({ preview });

	return (
		<div className={classes.root}>
			<Board>
				<Box p="30px" textAlign="left" color="text.primary">
					<ReactMarkdown source={preview} className="markdown-body" />
				</Box>
			</Board>
		</div>
	);
};

Viewer.propTypes = {
	preview: PropTypes.string,
};

Viewer.defaultProps = {
	preview: "",
};

export default Viewer;
