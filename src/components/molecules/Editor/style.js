import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	textArea: {
		backgroundColor: theme.palette.scale[5],
		padding: theme.spacing(2),
		color: theme.palette.text.primary,
		fontSize: 14,
		lineHeight: "18px",
		borderRadius: 5,
		width: "100%",
		border: "none",
		outline: "none",
		resize: "none",
	},
}));
