import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, TextareaAutosize } from "@material-ui/core";

import { useStyles } from "./style";
import { Board } from "@/components/atoms";

const countLines = (text = "") => text.split(/\r|\r\n|\n/).length;

const Editor = ({ defaultText, onChange, ...props }) => {
	const classes = useStyles();
	const [text, setText] = useState(defaultText);
	const [lines, setLines] = useState(countLines(defaultText));

	const handleTextChange = (e) => {
		const { value } = e.target;
		const lineCount = countLines(value);
		setText(value);
		setLines(lineCount);
		onChange && onChange(value);
	};

	return (
		<Board>
			<Grid container spacing={0} className={classes.root}>
				<Grid item xs={1}>
					{[...Array(lines)].map((_, num) => (
						<Typography key={num}>{num + 1}</Typography>
					))}
				</Grid>
				<Grid item xs={11}>
					<TextareaAutosize
						className={classes.textArea}
						value={text}
						onChange={handleTextChange}
						{...props}
					/>
				</Grid>
			</Grid>
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
