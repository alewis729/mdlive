import React from "react";
import { useSelector } from "react-redux";
import { Toolbar } from "@material-ui/core";

import { useStyles } from "./style";
import { IconLogo, IconLogoLight } from "@icons";
import { IconNavigation } from "@/components/molecules";

const Navigation = ({ ...props }) => {
	const classes = useStyles();
	const { theme } = useSelector(state => state.settings);

	return (
		<Toolbar disableGutters>
			<div className={classes.logo}>
				{theme === "light" && <IconLogo />}
				{theme === "dark" && <IconLogoLight />}
			</div>
			<div>
				<IconNavigation {...props} />
			</div>
		</Toolbar>
	);
};

export default Navigation;
