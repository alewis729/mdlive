import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Link, IconButton } from "@material-ui/core";
import {
	GitHub as IconGithub,
	LinkedIn as IconLinkedIn,
} from "@material-ui/icons";

import { useStyles } from "./style";

const Footer = ({ copy, links }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="xl" className={classes.content}>
				<Typography>{copy}</Typography>
				<div className={classes.icons}>
					{links.map((link) => (
						<Link
							href={link.url}
							key={link.url}
							target="_blank"
							rel="noreferrer"
						>
							<IconButton>{link.icon}</IconButton>
						</Link>
					))}
				</div>
			</Container>
		</div>
	);
};

Footer.propTypes = {
	copy: PropTypes.string,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			icon: PropTypes.element,
		})
	),
};

Footer.defaultProps = {
	copy: "© 2020 Alfred Lewis",
	links: [
		{ url: "https://github.com/alewis729", icon: <IconGithub /> },
		{ url: "https://www.linkedin.com/in/alewis729/", icon: <IconLinkedIn /> },
	],
};

export default Footer;
