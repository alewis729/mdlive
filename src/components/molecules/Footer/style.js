import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	icons: {
		"& > *": {
			marginLeft: theme.spacing(1),
		},
	},
}));
