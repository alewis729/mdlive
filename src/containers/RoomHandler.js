import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@material-ui/core";

import { updateCurrentId } from "@/store/actions";
import { useRandomPhrase } from "@/hooks";
import { InteractionsContainer, Previewer } from "@/containers";

const { REACT_APP_SERVER_URL } = process.env;
const socket = new io(REACT_APP_SERVER_URL);

const RoomHandler = ({ roomId }) => {
	const currentUser = useSelector(state => state.users.current);
	const previewerHomeContent = useSelector(state => state.room.content);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const greetPhraase = useRandomPhrase();
	const [content, setContent] = useState(previewerHomeContent ?? greetPhraase);

	useEffect(() => {
		socket.emit("room-join", {
			roomId,
			username: currentUser.name,
			role: currentUser.role,
			content,
		});
		socket.on("room-join-authenticated", () => {
			dispatch(updateCurrentId(socket.id));
		});
		socket.on("md-change", ({ content }) => setContent(content));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleEdit = value => {
		setContent(value);
		socket.emit("md-change", { content: value });
	};

	return (
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
	);
};

RoomHandler.propTypes = {
	roomId: PropTypes.string.isRequired,
};

export default RoomHandler;
