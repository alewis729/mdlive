/* eslint-disable */
import React from "react";
import {
	Drawer,
	AppBar,
	Tabs,
	Tab,
	Grid,
	Typography,
	Box,
	IconButton,
	TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SendRounded as IconSend } from "@material-ui/icons";

const formHeight = 150;

const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
	},
	chat: {
		backgroundColor: theme.palette.scale[5],
		// width: "100%",
		height: `calc(100% - ${formHeight}px)`,
	},
	form: {
		// backgroundColor: "orange",
		// height: formHeight,
		boxShadow: theme.helpers.boxShadow,
		"& .MuiFormControl-root.MuiTextField-root": {
			width: "100%",
		},
	},
}));

const Chat = () => {
	const classes = useStyles();

	const handleSendMessasge = () => {
		console.log("send message");
	};

	return (
		<div className={classes.root}>
			<Box className={classes.chat} p={2.5}>
				hello from the group chat
			</Box>
			<Box className={classes.form} p={2.5} height={formHeight}>
				<Grid container justify="space-between">
					<Grid item xs={10}>
						<TextField
							id="remove-later"
							multiline
							rows="4"
							placeholder="Send a message to everyone"
						/>
					</Grid>
					<Grid item xs={2}>
						<IconButton onClick={handleSendMessasge}>
							<IconSend />
						</IconButton>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Chat;
