import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root: {
		opacity: ({ preview }) => (preview.length > 0 ? "1" : "0.35"),
		transition: theme.helpers.transitionNormal,
		height: "100%",
	},
}));
