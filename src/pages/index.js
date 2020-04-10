import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Default } from "@/components/templates";
import { Navigation, Footer, Editor, Viewer } from "@/components/molecules";
import { Button } from "@/components/atoms";

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
});

const defaultText = "";

const Index = () => {
	const classes = useStyles();
	const [text, setText] = useState(defaultText);

	const handleNagivation = val => {
		console.log(val);
	};

	const handleMainButtonClick = () => {
		console.log("sign in");
	};

	const handleEditorChange = val => {
		setText(val);
	};

	return (
		<Default
			header={
				<Navigation
					onNavigate={handleNagivation}
					onMainButtonClick={handleMainButtonClick}
				/>
			}
			footer={<Footer />}
		>
			<Box className={classes.root} textAlign="center">
				<Typography variant="h3" gutterBottom>
					<Box
						fontWeight="fontWeightSemibold"
						component="span"
						color="text.primary"
					>
						Welcome{" "}
						<Box component="span" color="text.accent">
							friend
						</Box>
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						Just start typing in{" "}
						<Box
							component="span"
							color="text.accent"
							fontWeight="fontWeightSemibold"
						>
							markdown
						</Box>{" "}
						and see a live preview.
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						You can also invite others to join and interact live by making a new
						room.
					</Box>
				</Typography>
				<Box mt={2}>
					<Button onClick={() => console.log("new room")}>New room</Button>
				</Box>
				<Box mt={4} mx="auto" maxWidth={1640} height={600}>
					<Grid
						justify="center"
						container
						spacing={3}
						style={{ height: "100%" }}
					>
						<Grid item xs={6}>
							<Editor defaultText={defaultText} onChange={handleEditorChange} />
						</Grid>
						<Grid item xs={6}>
							<Viewer preview={text} />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Default>
	);
};

Index.displayName = "IndexPage";

export default Index;
