import React from "react";
import PropTypes from "prop-types";
import { Grid, Box, TextField, IconButton } from "@material-ui/core";
import { SendRounded as IconSend } from "@material-ui/icons";

import { useStyles } from "./style";

const InteractionChat = ({ renderChat }) => {
	const classes = useStyles();

	const handleSendMessasge = () => {
		console.log("send message");
	};

	return (
		<div className={classes.root}>
			<Box className={classes.chat} p={2.5}>
				{renderChat()}
			</Box>
			<Box className={classes.form} p={2.5}>
				<Grid container justify="space-between">
					<Grid item xs={10}>
						<TextField
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

InteractionChat.propTypes = {
	renderChat: PropTypes.func.isRequired,
};

export default InteractionChat;
