import { createMuiTheme } from "@material-ui/core/styles";
import { rgba } from "@/helpers";

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			dark: "#3e63aa",
			main: "#0f8fef",
			light: "#0bb2f4",
			contrastText: "#f7f7f7"
		},
		secondary: {
			main: "#202020",
			light: "#393939",
			contrastText: "#f7f7f7"
		},
		success: {
			light: "#33e28a",
			main: "#2bba73",
			dark: "#3E9E42",
			contrastText: "#f7f7f7"
		},
		error: {
			light: "#e57373",
			main: "#ff6347",
			dark: "#f46969",
			contrastText: "#f7f7f7"
		},
		text: {
			hint: "#0f8fef"
		},
		background: {
			paper: "#424242",
			default: "#303030",
			light: "#282828"
		}
	},
	helpers: {
		boxShadowLight: `0 2px 2px 0px ${rgba("#393939", 0.14)}`,
		boxShadow: `0 3px 5px 2px ${rgba("#393939", 0.1)}`,
		transitionQuick: "all 0.25s ease-out",
		transitionNormal: "all 0.45s ease-out"
	},
	typography: {
		fontFamily: "Poppins",
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightSemibold: 600,
		fontWeightBold: 700
	}
});

export default theme;
