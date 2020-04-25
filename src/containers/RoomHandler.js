import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import getConfig from "next/config";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@material-ui/core";

import { updateCurrentId } from "@/store/actions";
import { UserSetter, InteractionsContainer, Previewer } from "@/containers";
import { getRandomTextMd } from "@/helpers";

const { publicRuntimeConfig } = getConfig();
const { APP_URL } = publicRuntimeConfig;
const socket = io(APP_URL);
const defaultContent = getRandomTextMd();

const RoomHandler = ({ roomId }) => {
	const router = useRouter();
	const currentUser = useSelector(state => state.users.current);
	const [open, setOpenModal] = useState(!currentUser);
	const [content, setContent] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		if (!open && currentUser && currentUser.id !== socket.id) {
			dispatch(updateCurrentId(socket.id));
			setContent(defaultContent);
			// @todo: fix: client can modify role in devtools
			socket.emit("room-join", {
				roomId,
				username: currentUser.name,
				role: currentUser.role,
				content,
			});
		}
		// eslint-disable-next-line
	}, [currentUser, open]);

	useEffect(() => {
		socket.on("refresh-content", () => socket.emit("md-change", { content }));
		socket.on("new-md-change", ({ content }) => {
			setContent(content);
		});
	}, [content]);

	const handleEdit = value => {
		setContent(value);
		socket.emit("md-change", { content: value });
	};

	const handleReject = () => {
		setOpenModal(false);
		router.push("/");
	};

	return (
		<>
			<UserSetter
				open={open}
				onSubmitUsername={() => setOpenModal(false)}
				textCommit="Join room"
				onReject={handleReject}
			/>
			{currentUser && (
				<>
					<InteractionsContainer socket={socket} />
					<Box textAlign="center">
						<Typography variant="h6">
							Room code:{" "}
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
