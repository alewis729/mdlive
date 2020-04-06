import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down("sm")]: {},
	},
	icon: {
		minWidth: 40,
	},
}));
