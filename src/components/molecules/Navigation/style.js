import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
	logo: {
		flexGrow: 1,
		"& > svg": {
			width: "auto",
		},
	},
});
