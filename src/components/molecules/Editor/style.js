import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	textArea: {
		backgroundColor: theme.palette.background.light,
		padding: theme.spacing(2),
		color: theme.palette.text.primary,
		fontSize: 15,
		lineHeight: "18px",
		borderRadius: 5,
		height: "100%",
		"& > textarea": {
			height: "100% !important",
		},
	},
}));
