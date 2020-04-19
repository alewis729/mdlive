import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getConfig from "next/config";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";

import { UsernameSetter, InteractionsContainer, Previewer } from "@/containers";

const { publicRuntimeConfig } = getConfig();
const { APP_URL } = publicRuntimeConfig;
const socket = io(APP_URL);

const RoomHandler = ({ roomId }) => {
	const { name: username } = useSelector(state => state.user);
	const [shouldSaveNow, setShouldSaveNow] = useState(!username);

	useEffect(() => {
		if (!shouldSaveNow && username) {
			socket.emit("room-join", { username, room: roomId });
		}
		// eslint-disable-next-line
	}, [username, shouldSaveNow]);

	return (
		<>
			<UsernameSetter
				shouldSaveNow={shouldSaveNow}
				onSetUsername={() => setShouldSaveNow(false)}
				textCommit="Join room"
			/>
			{username && (
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
						<Previewer />
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
