import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Editor, Viewer } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { downloadFile } from "@/helpers";

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

const Previewer = ({ userRole, defaultContent, onEdit, ...props }) => {
	const { t } = useTranslation();
	const [canSave, setCanSave] = useState(false);
	const [content, setContent] = useState(defaultContent);
	const classes = useStyles({ canSave });
	const theme = useSelector(state => state.settings.theme);

	useEffect(() => setContent(defaultContent), [defaultContent]);

	const handleEditorChange = val => {
		const hasEnoughText = val.length > 5;

		if (onEdit) onEdit(val);
		else setContent(val);

		if (!canSave && hasEnoughText) setCanSave(true);
		else if (canSave && !hasEnoughText) setCanSave(false);
	};

	return (
		<Box {...props}>
			<Box mb={2} textAlign="left" height={42}>
				<div className={classes.saveButton}>
					<Button onClick={() => downloadFile(content)} color="success">
						{t("buttons.save")}
					</Button>
				</div>
			</Box>
			<Grid className={classes.mainGrid} container spacing={3} justify="center">
				<Grid
					item
					xs={userRole !== "viewer" ? 6 : 8}
					md={userRole !== "viewer" ? false : 10}
				>
					<Viewer
						preview={content}
						mdClassName={
							theme === "dark" ? "markdown-dark-body" : "markdown-body"
						}
					/>
				</Grid>
				{userRole !== "viewer" && (
					<Grid item xs={6}>
						<Editor defaultText={content} onChange={handleEditorChange} />
					</Grid>
				)}
			</Grid>
		</Box>
	);
};

Previewer.propTypes = {
	userRole: PropTypes.oneOf(["author", "editor", "viewer"]).isRequired,
	defaultContent: PropTypes.string.isRequired,
	onEdit: PropTypes.func,
};

Previewer.defaultProps = {
	userRole: "viewer",
	defaultContent: "",
	onEdit: null,
	mt: 2,
	mx: "auto",
	maxWidth: 1600,
};

export default Previewer;
