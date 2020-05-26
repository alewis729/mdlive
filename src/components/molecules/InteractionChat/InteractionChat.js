import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();
	const classes = useStyles();
	const [text, setText] = useState("");
	const [shouldScroll, setShouldScroll] = useState(true);
	const chatRef = useRef(null);

	useEffect(() => {
		const { current: chat } = chatRef;
		if (chat) {
			chat.onscroll = () => {
				// check if scroll position is not at the bottom
				if (chat.scrollHeight !== chat.scrollTop + chat.clientHeight) {
					setShouldScroll(false);
				} else setShouldScroll(true); // @todo: add down arrow to scroll to bottom on new message
			};
		}
	}, [chatRef]);

	useEffect(() => {
		const { current: chat } = chatRef;
		if (chat.scrollHeight > chat.clientHeight && shouldScroll) {
			scrollToBottom(chat);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chatMessages]);

	const handleKeyDown = e => {
		if (e.keyCode === 13 && !e.shiftKey) handleSubmit();
	};

	const handleTextChange = e => {
		const { value } = e.target;
		const cleanValue = value.replace(/[\r\n\v]+/g, "");
		setText(cleanValue);
	};

	const handleSubmit = () => {
		if (replaceSpaces(text).length !== 0) {
			onMessageSubmit(replaceWhiteSpaces(text));
			// todo: scroll to bottom, focus input
			setText("");
		}
	};

	const scrollToBottom = elm => elm.scrollTo(0, elm.scrollHeight);

	return (
		<div className={classes.root}>
			<Box ref={chatRef} className={classes.chat} p={2.5}>
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
							placeholder={t("room.chatPlaceholder")}
							multiline
							rows="4"
							value={text}
							onKeyDown={handleKeyDown}
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
