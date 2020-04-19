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
	const { name: username, role } = useSelector(state => state.user);
	const [shouldSaveNow, setShouldSaveNow] = useState(!username);

	useEffect(() => {
		if (!shouldSaveNow && username) {
			// @todo: fix: client can modify role in devtools
			socket.emit("room-join", { room: roomId, username, role });
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
						<Previewer role={role} />
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
