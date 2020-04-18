import React from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@material-ui/core";

import { InteractionsContainer, Previewer } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation, Footer } from "@/components/molecules";

const Room = () => {
	const router = useRouter();

	const handleNagivation = val => {
		console.log(val);
	};

	const handleMainButtonClick = () => {
		console.log("sign in");
	};

	if (!router.query.roomId) return <div>loading</div>;

	return (
		<Default
			header={
				<Navigation
					onNavigate={handleNagivation}
					onMainButtonClick={handleMainButtonClick}
				/>
			}
			footer={<Footer />}
		>
			<InteractionsContainer room={router.query.roomId} />
			<Box textAlign="center">
				{router.query.roomId && (
					<Typography variant="h6">
						Room code:{" "}
						<Box
							fontWeight="fontWeightSemibold"
							component="span"
							color="text.primary"
						>
							{router.query.roomId}
						</Box>
					</Typography>
				)}
				<Previewer />
			</Box>
		</Default>
	);
};

Room.displayName = "RoomPage";

export default Room;
