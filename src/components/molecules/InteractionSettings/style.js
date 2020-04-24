import { makeStyles } from "@material-ui/core/styles";

const settingsHeight = 100;

export const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
		overflow: "hidden",
	},
	settings: {
		height: settingsHeight,
	},
	users: {
		overflowY: "auto",
		height: `calc(100% - ${settingsHeight}px)`,
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.getContrastText(theme.palette.primary.main),
	},
}));
