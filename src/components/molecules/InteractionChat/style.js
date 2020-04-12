import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
		overflow: "hidden",
	},
	chat: {
		height: `calc(100% - ${formHeight}px)`,
		overflowY: "auto",
	},
	form: {
		backgroundColor: theme.palette.white,
		zindex: 150,
		position: "relative",
		display: "block",
		height: formHeight,
		boxShadow: theme.helpers.boxShadow,
		"& .MuiFormControl-root.MuiTextField-root": {
			width: "100%",
		},
	},
}));

const formHeight = 150;
