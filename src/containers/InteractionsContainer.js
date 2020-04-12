import React, { useEffect } from "react";
import getConfig from "next/config";
import io from "socket.io-client";
import { Box } from "@material-ui/core";

import { InteractionSettings, InteractionChat } from "@/components/molecules";
import { InteractionsPanel } from "@/components/organisms";

const { publicRuntimeConfig } = getConfig();
const { SERVER_URL } = publicRuntimeConfig;
const socket = io(SERVER_URL);

const InteractionsContainer = () => {
	useEffect(() => {
		socket.on("connection");
		socket.on("message", message => {
			console.log(message);
		});
	}, []);

	return (
		<InteractionsPanel
			renderSettings={() => (
				<InteractionSettings
					people={[]}
					renderPerson={person => <Box>{person.name}</Box>}
				/>
			)}
			renderChat={() => <InteractionChat renderChat={() => {}} />}
		/>
	);
};

export default InteractionsContainer;
