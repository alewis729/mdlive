import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import { RoomHandler } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation, Footer } from "@/components/molecules";

const Room = ({ darkMode }) => {
	const router = useRouter();
	const { roomId } = router.query;

	const handleNagivation = action => {
		if (action === "toggle-theme") darkMode.toggle();
	};

	return (
		<Default
			header={
				<Navigation items={["toggle-theme"]} onNavigate={handleNagivation} />
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

Room.propTypes = {
	darkMode: PropTypes.object.isRequired,
};

Room.displayName = "RoomPage";

export default Room;
