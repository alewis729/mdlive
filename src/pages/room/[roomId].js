import React from "react";
import { useRouter } from "next/router";

import { RoomHandler } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation, Footer } from "@/components/molecules";

const Room = () => {
	const router = useRouter();
	const { roomId } = router.query;

	const handleNagivation = val => {
		console.log(val);
	};

	const handleMainButtonClick = () => {
		console.log("sign in");
	};

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
			{!roomId ? (
				<div>
					Something is wrong! There is no room id... verify that the url is
					correct.
				</div>
			) : (
				<RoomHandler roomId={roomId} />
			)}
		</Default>
	);
};

Room.displayName = "RoomPage";

export default Room;
