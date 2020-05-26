import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateUsers, cleanCurrentUser } from "@/store/actions";
import { useInteractionModals } from "@/hooks";
import { InteractionSettings, InteractionChat } from "@/components/molecules";
import { InteractionsPanel } from "@/components/organisms";

const InteractionsContainer = ({ socket }) => {
	const history = useHistory();
	const { current: currentUser, all: users } = useSelector(
		state => state.users
	);
	const dispatch = useDispatch();
	const [chatMessages, setChatMessages] = useState([]);
	const newAuthorRef = useRef(null);
	const {
		showModalInvite,
		showModalLeave,
		showModalKicked,
		showModalAuthor,
		hideModalLeave,
		hideModalKicked,
		hideModalAuthor,
		closeAllModals,
	} = useInteractionModals({
		fullUrl: window.location.href,
		onModalLeaveConfirm: () => {
			hideModalLeave();
			resetUser();
		},
		onModalKickedConfirm: () => {
			hideModalKicked();
			resetUser();
		},
		onModalAuthorConfirm: () => {
			socket.emit("role-update", { id: newAuthorRef.current, role: "author" });
			hideModalAuthor();
		},
		onModalAuthorCancel: () => {
			newAuthorRef.current = null;
			hideModalAuthor();
		},
	});

	useEffect(() => {
		socket.on("room-users", ({ users }) => {
			dispatch(updateUsers(users));
		});
		socket.on("message", ({ id, name, message }) => {
			setChatMessages(chatMessages => [...chatMessages, { id, name, message }]);
		});
		socket.on("kick", () => showModalKicked());

		return () => {
			setChatMessages([]);
			closeAllModals();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleUserMenuAction = (userId, action) => {
		let role = null;

		if (action === "kick") socket.emit("kick-user", { id: userId });
		else if (action === "make-viewer") role = "viewer";
		else if (action === "make-editor") role = "editor";
		else if (action === "make-author") {
			newAuthorRef.current = userId;
			showModalAuthor();
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

	return (
		<>
			<InteractionsPanel
				renderSettings={() =>
					currentUser.name &&
					currentUser.id && (
						<InteractionSettings
							currentUser={currentUser}
							users={users}
							onUserMenuAction={handleUserMenuAction}
							onInvite={showModalInvite}
							onLeave={showModalLeave}
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
