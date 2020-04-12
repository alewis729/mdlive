import React, { useEffect } from "react";
import io from "socket.io-client";
import { Box } from "@material-ui/core";

import { InteractionSettings, InteractionChat } from "@/components/molecules";
import { InteractionsPanel } from "@/components/organisms";

const socket = io("http://localhost:5000");

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
