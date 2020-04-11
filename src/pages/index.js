import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Default } from "@/components/templates";
import { Navigation, Footer, Editor, Viewer } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { getRandomTextMd, downloadFile } from "@/helpers/functional";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
	},
	saveButton: {
		visibility: ({ canSave }) => (canSave ? "visible" : "hidden"),
		opacity: ({ canSave }) => (canSave ? "1" : "0"),
		transition: theme.helpers.transitionQuick,
	},
	mainGrid: {
		height: "100%",
	},
}));

const Index = () => {
	const defaultText = getRandomTextMd();
	const [text, setText] = useState(defaultText);
	const [canSave, setCanSave] = useState(false);
	const classes = useStyles({ canSave });

	const handleNagivation = val => {
		console.log(val);
	};

	const handleMainButtonClick = () => {
		console.log("sign in");
	};

	const handleEditorChange = val => {
		const hasEnoughText = val.length > 5;
		setText(val);

		if (!canSave && hasEnoughText) setCanSave(true);
		else if (canSave && !hasEnoughText) setCanSave(false);
	};

	const handleSaveFile = () => downloadFile(text);

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
				<Box mt={2} mx="auto" maxWidth={1640}>
					<Box mb={2} textAlign="left" height={42}>
						<div className={classes.saveButton}>
							<Button onClick={handleSaveFile} color="success">
								Save
							</Button>
						</div>
					</Box>
					<Grid
						className={classes.mainGrid}
						container
						spacing={3}
						justify="center"
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
