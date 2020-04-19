import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import getConfig from "next/config";
import { Box } from "@material-ui/core";

import {
	InteractionSettings,
	InteractionChat,
	ModalLeaveRoom,
	ModalShareRoom,
} from "@/components/molecules";
import { InteractionsPanel } from "@/components/organisms";
import { getFullUrl } from "@/helpers";

const { publicRuntimeConfig } = getConfig();
const { APP_URL } = publicRuntimeConfig;
const initialModals = { leave: false, invite: false };

const InteractionsContainer = ({ socket }) => {
	const router = useRouter();
	const [users, setUsers] = useState([]);
	const [chatMessages, setChatMessages] = useState([]);
	const [modals, setModals] = useState(initialModals);
	const fullUrl = getFullUrl(APP_URL, router.asPath);

	useEffect(() => {
		socket.on("room-users", ({ users }) => {
			console.log("room-users", users);
			setUsers(users);
		});
		socket.on("message", ({ id, name, message }) => {
			setChatMessages(chatMessages => [...chatMessages, { id, name, message }]);
		});

		return () => {
			setChatMessages([]);
			setModals(initialModals);
		};
		// eslint-disable-next-line
	}, []);

	const handleMessageSubmit = message => {
		socket.emit("message", { message });
	};

	const handleLeave = () => {
		setModals(initialModals);
		socket.disconnect();
		router.push("/");
	};

	return (
		<>
			<ModalShareRoom
				open={modals.invite}
				room={fullUrl}
				onClose={() => setModals({ ...modals, invite: false })}
			/>
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
						onInvite={() => setModals({ ...modals, invite: true })}
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
	socket: PropTypes.object.isRequired,
};

export default InteractionsContainer;
