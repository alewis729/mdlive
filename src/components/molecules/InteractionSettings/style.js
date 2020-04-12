import { makeStyles } from "@material-ui/core/styles";

const settingsHeight = 100;

export const useStyles = makeStyles({
	root: {
		height: "100%",
		overflow: "hidden",
	},
	settings: {
		height: settingsHeight,
	},
	people: {
		overflowY: "auto",
		height: `calc(100% - ${settingsHeight}px)`,
	},
});
