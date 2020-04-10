import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Box } from "@material-ui/core";

import { Board } from "@/components/atoms";

const Viewer = ({ preview }) => {
	return (
		<Board>
			<Box p="30px" textAlign="left" color="text.primary">
				<ReactMarkdown source={preview} className="markdown-body" />
			</Box>
		</Board>
	);
};

Viewer.propTypes = {
	preview: PropTypes.string,
};

Viewer.defaultProps = {
	preview: "",
};

export default Viewer;
