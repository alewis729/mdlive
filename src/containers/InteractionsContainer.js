import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getConfig from "next/config";
import io from "socket.io-client";
import { Box } from "@material-ui/core";

import { InteractionSettings, InteractionChat } from "@/components/molecules";
import { InteractionsPanel } from "@/components/organisms";

const { publicRuntimeConfig } = getConfig();
const { SERVER_URL } = publicRuntimeConfig;
const socket = io(SERVER_URL);
const user = { id: "0", name: "alfred" };

const InteractionsContainer = ({ room, onLeave }) => {
	const [chatMessages, setChatMessages] = useState([]);

	useEffect(() => {
		socket.emit("user-connect", { name: user.name, room });
		socket.on("message", ({ id, name, message }) => {
			console.log(message);
			setChatMessages(chatMessages => [...chatMessages, { id, name, message }]);
		});
		// eslint-disable-next-line
	}, []);

	const handleMessageSubmit = message => {
		const { id, name } = user;
		socket.emit("message", { id, name, message });
	};

	return (
		<InteractionsPanel
			renderSettings={() => (
				<InteractionSettings
					people={[]}
					renderPerson={person => <Box>{person.name}</Box>}
					onInvite={() => console.log("invite others")}
					onLeave={onLeave}
				/>
			)}
			renderChat={() => (
				<InteractionChat
					chatMessages={chatMessages}
					onMessageSubmit={handleMessageSubmit}
				/>
			)}
		/>
	);
};

InteractionsContainer.propTypes = {
	room: PropTypes.string.isRequired,
	onLeave: PropTypes.func.isRequired,
};

export default InteractionsContainer;
