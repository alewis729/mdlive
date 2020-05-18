import React from "react";
import PropTypes from "prop-types";

import { RoomHandler } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation, Footer } from "@/components/molecules";

const Room = ({ match }) => {
	const { roomId } = match.params;

	return (
		<Default
			header={<Navigation items={["toggle-theme"]} />}
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
	match: PropTypes.shape({
		params: PropTypes.object.isRequired
	}).isRequired
};

Room.displayName = "RoomPage";

export default Room;
