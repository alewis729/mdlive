import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateUsers, cleanCurrentUser } from "@/store/actions";
import {
	InteractionSettings,
	InteractionChat,
	ModalLeaveRoom,
	ModalShareRoom,
	ModalKicked,
	ModalAuthorConfirm,
} from "@/components/molecules";
import { InteractionsPanel } from "@/components/organisms";

const initialModals = {
	leave: false,
	invite: false,
	authorConfirm: false,
	kicked: false,
};

const InteractionsContainer = ({ socket }) => {
	const history = useHistory();
	const { current: currentUser, all: users } = useSelector(
		state => state.users
	);
	const dispatch = useDispatch();
	const [chatMessages, setChatMessages] = useState([]);
	const [newAuthor, setNewAuthor] = useState(null);
	const [modals, setModals] = useState(initialModals);

	useEffect(() => {
		socket.on("room-users", ({ users }) => {
			dispatch(updateUsers(users));
		});
		socket.on("message", ({ id, name, message }) => {
			setChatMessages(chatMessages => [...chatMessages, { id, name, message }]);
		});
		socket.on("kick", () => {
			setModals({ ...modals, kicked: true });
		});

		return () => {
			setChatMessages([]);
			setModals(initialModals);
		};
		// eslint-disable-next-line
	}, []);

	const handleUserMenuAction = (userId, action) => {
		let role = null;

		if (action === "kick") socket.emit("kick-user", { id: userId });
		else if (action === "make-viewer") role = "viewer";
		else if (action === "make-editor") role = "editor";
		else if (action === "make-author") {
			setNewAuthor(userId);
			setModals({ ...modals, authorConfirm: true });
		}

		if (role) socket.emit("role-update", { id: userId, role });
	};

	const handleMessageSubmit = message => {
		socket.emit("message", { message });
	};

	const resetUser = () => {
		dispatch(cleanCurrentUser());
		socket.disconnect();
		history.push("/");
	};

	const handleLeave = () => {
		setModals(initialModals);
		resetUser();
	};

	const handleKick = () => {
		setModals({ ...modals, kicked: false });
		resetUser();
	};

	const handleAuthorConfirm = () => {
		setModals({ ...modals, authorConfirm: false });
		socket.emit("role-update", { id: newAuthor, role: "author" });
	};

	return (
		<>
			<ModalShareRoom
				open={modals.invite}
				room={window.location.href}
				onClose={() => setModals({ ...modals, invite: false })}
			/>
			<ModalLeaveRoom
				open={modals.leave}
				onMainAction={handleLeave}
				onClose={() => setModals({ ...modals, leave: false })}
			/>
			<ModalKicked
				open={modals.kicked}
				onMainAction={handleKick}
				onClose={handleKick}
			/>
			<ModalAuthorConfirm
				open={modals.authorConfirm}
				onMainAction={handleAuthorConfirm}
				onClose={() => {
					setNewAuthor(null);
					setModals({ ...modals, authorConfirm: false });
				}}
			/>
			<InteractionsPanel
				renderSettings={() =>
					currentUser &&
					currentUser.id && (
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
