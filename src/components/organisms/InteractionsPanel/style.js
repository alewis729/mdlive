import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root: {},
	buttonOpen: {
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
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: 350,
		[theme.breakpoints.down("md")]: {
			width: 300,
		},
	},
	tabs: {
		"& .MuiTab-root": {
			minWidth: "auto",
			flexGrow: 1,
		},
	},
	main: {
		flexGrow: 1,
		"& > div": { height: "100%" },
	},
	buttonClose: {
		borderRadius: 0,
		boxShadow: "none",
		"&:hover": { boxShadow: "none" },
		width: "100%",
		height: "100%",
	},
}));

const toolbarPadding = theme => ({
	"&::before": {
		content: "''",
		display: "block",
		...theme.mixins.toolbar,
	},
});
