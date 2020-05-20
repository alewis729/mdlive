import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@material-ui/core";

import { updateCurrentId } from "@/store/actions";
import { useRandomPhrase } from "@/hooks";
import { UserSetter, InteractionsContainer, Previewer } from "@/containers";

const { REACT_APP_SERVER_URL } = process.env;
const socket = io(REACT_APP_SERVER_URL, { forceNew: true });

const RoomHandler = ({ roomId }) => {
	const history = useHistory();
	const currentUser = useSelector(state => state.users.current);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const greetPhraase = useRandomPhrase();
	const [open, setOpenModal] = useState(!currentUser);
	const [content, setContent] = useState(greetPhraase);
	const [hasJoined, setHasJoined] = useState(false);

	useEffect(() => {
		socket.on("md-change", ({ content }) => setContent(content));
	}, []);

	useEffect(() => {
		if (!open && !hasJoined && currentUser && currentUser.id !== socket.id) {
			dispatch(updateCurrentId(socket.id));
			socket.emit("room-join", {
				roomId,
				username: currentUser.name,
				role: currentUser.role,
				content,
			});
			setHasJoined(true);
		}
		// eslint-disable-next-line
	}, [currentUser, open, socket]);

	const handleEdit = value => {
		setContent(value);
		socket.emit("md-change", { content: value });
	};

	const handleReject = () => {
		setOpenModal(false);
		history.push("/");
	};

	return (
		<>
			<UserSetter
				open={open}
				onSubmitUsername={() => setOpenModal(false)}
				textCommit="joinRoom"
				onReject={handleReject}
			/>
			{currentUser && (
				<>
					<InteractionsContainer socket={socket} />
					<Box textAlign="center">
						<Typography variant="h6">
							{`${t("room.roomCode")} `}
							<Box
								fontWeight="fontWeightSemibold"
								component="span"
								color="text.primary"
							>
								{roomId}
							</Box>
						</Typography>
						<Previewer
							userRole={currentUser.role}
							defaultContent={content}
							onEdit={handleEdit}
						/>
					</Box>
				</>
			)}
		</>
	);
};

RoomHandler.propTypes = {
	roomId: PropTypes.string.isRequired,
};

export default RoomHandler;
