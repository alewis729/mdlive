import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: theme.palette.white,
		boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.1)",
	},
	logo: {
		flexGrow: 1,
		"& > div": {
			backgroundColor: theme.palette.scale[1],
			width: 90,
			height: 30,
		},
	},
}));
