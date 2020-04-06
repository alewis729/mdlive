import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#556cd6"
		},
		secondary: {
			main: "#19857b"
		},
		error: {
			main: red.A400
		},
		background: {
			default: "#fff"
		}
	},
	typography: {
		fontFamily: "Montserrat",
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 700,
		fontWeightBold: 900
	}
});

export default theme;
