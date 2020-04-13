import { createMuiTheme } from "@material-ui/core/styles";
import { rgba } from "@/helpers";

const theme = createMuiTheme({
	palette: {
		black: "#000",
		white: "#fff",
		scale: ["#202020", "#393939", "#878787", "#b2b2b2", "#e4e4e4", "#f7f8fb"],
		primary: {
			darker: "#1e3b71",
			dark: "#3e63aa",
			main: "#0f8fef",
			light: "#0bb2f4",
		},
		secondary: {
			main: "#19857b",
		},
		background: {
			default: "#fff",
			light: "#f7f8fb",
		},
		success: {
			main: "#2bba73",
			light: "#33e28a",
		},
		danger: {
			main: "#bc4242",
			light: "#f46969",
		},
		warn: {
			main: "#f8d64f",
			light: "#f2f24c",
		},
		info: {
			main: "#202020",
			light: "#393939",
		},
		text: {
			primary: "#303030",
			secondary: "#393939",
			accent: "#0f8fef",
		},
	},
	helpers: {
		boxShadowLight: `0 2px 2px 0px ${rgba("#202020", 0.14)}`,
		boxShadow: `0 3px 5px 2px ${rgba("#202020", 0.1)}`,
		transitionQuick: "all 0.25s ease-out",
		transitionNormal: "all 0.45s ease-out",
	},
	typography: {
		fontFamily: "Poppins",
		fontFamilyDisplay: "Montserrat",
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightSemibold: 600,
		fontWeightBold: 700,
	},
});

export default theme;
