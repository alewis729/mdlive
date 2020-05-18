import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	icons: {
		display: "flex",
		"& a": {
			marginLeft: theme.spacing(1),
			paddingTop: theme.spacing(1),
		},
	},
}));
