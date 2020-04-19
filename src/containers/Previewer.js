import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Editor, Viewer } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { getRandomTextMd, downloadFile } from "@/helpers";

const useStyles = makeStyles(theme => ({
	saveButton: {
		visibility: ({ canSave }) => (canSave ? "visible" : "hidden"),
		opacity: ({ canSave }) => (canSave ? "1" : "0"),
		transition: theme.helpers.transitionQuick,
	},
	mainGrid: {
		height: "100%",
	},
}));
const defaultText = getRandomTextMd();

const Previewer = ({ role, ...props }) => {
	const [canSave, setCanSave] = useState(false);
	const [text, setText] = useState("");
	const classes = useStyles({ canSave });

	useEffect(() => setText(defaultText), []);

	const handleEditorChange = val => {
		const hasEnoughText = val.length > 5;
		setText(val);

		if (!canSave && hasEnoughText) setCanSave(true);
		else if (canSave && !hasEnoughText) setCanSave(false);
	};

	return (
		<Box {...props}>
			<Box mb={2} textAlign="left" height={42}>
				<div className={classes.saveButton}>
					<Button onClick={() => downloadFile(text)} color="success">
						Save
					</Button>
				</div>
			</Box>
			<Grid className={classes.mainGrid} container spacing={3} justify="center">
				{role !== "viewer" ? (
					<>
						<Grid item xs={6}>
							<Editor defaultText={defaultText} onChange={handleEditorChange} />
						</Grid>
						<Grid item xs={6}>
							<Viewer preview={text} />
						</Grid>
					</>
				) : (
					<Grid item xs={8} md={10}>
						<Viewer preview={text} />
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

Previewer.propTypes = {
	role: PropTypes.oneOf(["author", "editor", "viewer"]).isRequired,
};

Previewer.defaultProps = {
	role: "viewer",
	mt: 2,
	mx: "auto",
	maxWidth: 1600,
};

export default Previewer;
