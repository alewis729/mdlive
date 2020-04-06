import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Menu } from "@components/molecules";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2, 4),
	},
}));

const Index = () => {
	const classes = useStyles();

	const handleMenuItemClick = (id) => {
		console.log(id);
	};

	return (
		<Container className={classes.root}>
			<h1>hello from indexpage</h1>
			<Menu onItemClick={handleMenuItemClick} />
		</Container>
	);
};

Index.displayName = "IndexPage";

export default Index;
