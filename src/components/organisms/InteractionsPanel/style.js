import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
		width: "100%",
		position: "relative",
		backgroundColor: "orange",
	},
	openButton: {
		...toolbarPadding(theme),
		zIndex: 99,
		border: "none",
		height: 110,
		width: 80,
		borderBottomLeftRadius: 5,
		transform: "translateX(20px)",
		boxShadow: theme.helpers.boxShadowLight,
		transition: theme.helpers.transitionQuick,
		"&:hover": {
			transform: "translateX(0)",
		},
		"& > .MuiButton-root": {
			width: "100%",
			height: "100%",
			borderRadius: 0,
			"&::after": {
				content: "''",
				display: "block",
				paddingRight: 20,
			},
		},
	},
	drawer: {
		...toolbarPadding(theme),
		zIndex: 100,
	},
	content: {
		backgroundColor: theme.palette.background.paper,
		width: 500,
	},
}));

const toolbarPadding = theme => ({
	"&::before": {
		content: "''",
		display: "block",
		...theme.mixins.toolbar,
	},
});
