import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getConfig from "next/config";
import io from "socket.io-client";
import { Box } from "@material-ui/core";

import {
	InteractionSettings,
	InteractionChat,
	ModalLeaveRoom,
} from "@/components/molecules";
import { InteractionsPanel } from "@/components/organisms";

const { publicRuntimeConfig } = getConfig();
const { SERVER_URL } = publicRuntimeConfig;
const socket = io(SERVER_URL);
const user = { id: "0", name: "alfred" };
const initialModals = { leave: false, invite: false };

const InteractionsContainer = ({ room, onLeave }) => {
	const [chatMessages, setChatMessages] = useState([]);
	const [modals, setModals] = useState(initialModals);

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

	const handleLeave = () => {
		setModals(initialModals);
		onLeave();
	};

	return (
		<>
			<ModalLeaveRoom
				open={modals.leave}
				onMainAction={handleLeave}
				onClose={() => setModals({ ...modals, leave: false })}
			/>
			<InteractionsPanel
				renderSettings={() => (
					<InteractionSettings
						people={[]}
						renderPerson={person => <Box>{person.name}</Box>}
						onInvite={() => console.log("invite others")}
						onLeave={() => setModals({ ...modals, leave: true })}
					/>
				)}
				renderChat={() => (
					<InteractionChat
						chatMessages={chatMessages}
						onMessageSubmit={handleMessageSubmit}
					/>
				)}
			/>
		</>
	);
};

InteractionsContainer.propTypes = {
	room: PropTypes.string.isRequired,
	onLeave: PropTypes.func.isRequired,
};

export default InteractionsContainer;
