import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextareaAutosize } from "@material-ui/core";

import { useStyles } from "./style";
import { Board } from "@/components/atoms";

const Editor = ({ defaultText, onChange, ...props }) => {
	const classes = useStyles();
	const [text, setText] = useState(defaultText);

	const handleTextChange = e => {
		const { value } = e.target;
		setText(value);
		onChange && onChange(value);
	};

	return (
		<Board>
			<TextareaAutosize
				className={classes.textArea}
				value={text}
				onChange={handleTextChange}
				{...props}
			/>
		</Board>
	);
};

Editor.propTypes = {
	defaultText: PropTypes.string,
	onChange: PropTypes.func,
};

Editor.defaultProps = {
	defaultText: "\n",
	onChange: null,
	rowsMin: 2,
};

export default Editor;
