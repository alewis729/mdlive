import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
		backgroundColor: theme.palette.white,
		padding: theme.spacing(6, 0),
		width: "100%",
	},
	content: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	icons: {
		"& > *": {
			marginLeft: theme.spacing(1),
		},
	},
}));
