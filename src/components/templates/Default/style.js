import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		minHeight: "100vh",
		padding: 0,
		margin: 0,
		maxWidth: "none",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	appBar: {
		backgroundColor: theme.palette.white,
		boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.1)",
	},
	main: {
		flexGrow: 1,
	},
	footer: {
		boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
		backgroundColor: theme.palette.white,
		padding: theme.spacing(6, 0),
		width: "100%",
	},
}));
