import { createMuiTheme } from "@material-ui/core/styles";

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
		},
		success: {
			dark: "#2bba73",
			main: "#33e28a",
		},
		danger: {
			dark: "#bc4242",
			main: "#f46969",
		},
		warn: {
			dark: "#fb9e12",
			main: "#fbbf12",
			// "#fb9e12",
			// "#fbbf12",
			// "#f8d64f",
			// "#f2f24c",
			// "#f2f24c",
		},
		text: {
			primary: "#202020",
			secondary: "#393939",
			accent: "#0f8fef",
		},
	},
	helpers: {
		transition: "all 0.45s ease-out",
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
