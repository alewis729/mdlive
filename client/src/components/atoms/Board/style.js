import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		height: "100%",
		// backgroundColor: "tomato", // remove-later
		backgroundColor: theme.palette.background.default,
	},
}));
