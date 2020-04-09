import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	logo: {
		flexGrow: 1,
		"& > div": {
			backgroundColor: theme.palette.scale[1],
			width: 90,
			height: 30,
		},
	},
}));
