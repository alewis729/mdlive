import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		// minWidth: 600,
		// maxWidth: 720,
		"& p": { color: theme.palette.text.tertiary },
		"& textarea": { color: theme.palette.text.primary },
		"& p, & textarea": {
			// color: theme.palette.text.primary,
			fontFamily: theme.typography.fontFamilyDisplay,
			fontWeight: theme.typography.fontWeightRegular,
			fontSize: 14,
			lineHeight: "18px",
		},
	},
	textArea: {
		// backgroundColor: theme.palette.scale[4],
		fontFamily: "inherit",
		width: "100%",
		// borderRadius: "inherit",
		border: "none",
		outline: "none",
		resize: "none",
	},
}));
