import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Grid,
	Box,
	Typography,
	TextField,
	IconButton,
} from "@material-ui/core";
import { SendRounded as IconSend } from "@material-ui/icons";

import { useStyles } from "./style";
import { replaceSpaces, replaceWhiteSpaces } from "@/helpers";

const InteractionChat = ({ chatMessages, onMessageSubmit }) => {
	const classes = useStyles();
	const [text, setText] = useState("");

	const handleTextChange = e => {
		const { value } = e.target;
		setText(value);
	};

	const handleSubmit = () => {
		if (replaceSpaces(text).length !== 0) {
			onMessageSubmit(replaceWhiteSpaces(text));
			// todo: scroll to bottom, focus input
			setText("");
		}
	};

	return (
		<div className={classes.root}>
			<Box className={classes.chat} p={2.5}>
				{chatMessages.map((item, index) => (
					<Typography key={index} gutterBottom>
						<Box
							fontWeight="fontWeightSemibold"
							component="span"
							color="text.primary"
						>
							{`${item.name}: `}
						</Box>
						<Box component="span" color="text.primary">
							{item.message}
						</Box>
					</Typography>
				))}
			</Box>
			<Box className={classes.form} p={2.5}>
				<Grid container justify="space-between">
					<Grid item xs={10}>
						<TextField
							placeholder="Send a message to everyone"
							multiline
							rows="4"
							value={text}
							onChange={handleTextChange}
						/>
					</Grid>
					<Grid item xs={2}>
						<IconButton onClick={handleSubmit}>
							<IconSend />
						</IconButton>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

InteractionChat.propTypes = {
	chatMessages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			message: PropTypes.string.isRequired,
		})
	).isRequired,
	onMessageSubmit: PropTypes.func.isRequired,
};

export default InteractionChat;
