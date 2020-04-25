import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import getConfig from "next/config";
import { useSelector } from "react-redux";
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

const testUsers = [
	{ id: "0", name: "alfred", role: "author" },
	{ id: "1", name: "patrick", role: "viewer" },
	{ id: "2", name: "rosario", role: "viewer" },
];

const InteractionsContainer = ({ socket }) => {
	const router = useRouter();
	const currentUser = useSelector(state => state.users.current);
	const [users, setUsers] = useState(testUsers);
	const [chatMessages, setChatMessages] = useState([]);
	const [modals, setModals] = useState(initialModals);
	const fullUrl = getFullUrl(APP_URL, router.asPath);

	useEffect(() => {
		// socket.on("room-users", ({ users }) => {
		// 	console.log("room-users", users);
		// 	setUsers(users);
		// });
		socket.on("message", ({ id, name, message }) => {
			setChatMessages(chatMessages => [...chatMessages, { id, name, message }]);
		});

		return () => {
			setChatMessages([]);
			setModals(initialModals);
		};
		// eslint-disable-next-line
	}, []);

	const handleUserMenuAction = (user, menuItem) => {
		console.log(user, menuItem);
	};

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
				renderSettings={() =>
					currentUser && (
						<InteractionSettings
							currentUser={currentUser}
							users={users}
							onUserMenuAction={handleUserMenuAction}
							onInvite={() => setModals({ ...modals, invite: true })}
							onLeave={() => setModals({ ...modals, leave: true })}
						/>
					)
				}
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
