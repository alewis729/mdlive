import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";

import { UsernameSetter, InteractionsContainer, Previewer } from "@/containers";

const RoomHandler = ({ roomId }) => {
	const { name: username } = useSelector(state => state.user);
	const [shouldSaveNow, setShouldSaveNow] = useState(!username);

	return (
		<>
			<UsernameSetter
				shouldSaveNow={shouldSaveNow}
				onSetUsername={() => setShouldSaveNow(false)}
				textCommit="Join room"
			/>
			{username && (
				<>
					<InteractionsContainer room={roomId} />
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
