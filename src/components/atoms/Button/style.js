import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { rgba } from "@/helpers/styleHelpers";

export const RoundedButton = withStyles(theme => ({
	root: {
		backgroundImage: `linear-gradient(
			75deg,
			${theme.palette.primary.light},
			${theme.palette.primary.main}
		)`,
		color: theme.palette.white,
		textTransform: "capitalize",
		borderRadius: 100,
		position: "relative",
		overflow: "hidden",
		padding: theme.spacing(1, 3.5),
		transition: theme.helpers.transitionQuick,
		"&:hover": {
			boxShadow: `0 3px 5px 2px ${rgba(theme.palette.primary.light, 0.25)}`,
		},
		"&:hover::before": {
			opacity: "1",
		},
		"&:before": {
			opacity: "0",
			content: "''",
			width: "110%",
			height: "110%",
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			transition: "inherit",
			backgroundImage: `linear-gradient(
				75deg,
				${theme.palette.primary.main},
				${theme.palette.primary.light}
			)`,
		},
		"& > .MuiButton-label": {
			display: "inline-block",
			position: "relative",
			zIndex: "inherit",
		},
	},
}))(Button);
