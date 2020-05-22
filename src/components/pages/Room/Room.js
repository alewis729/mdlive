import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { RoomHandler } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation } from "@/components/organisms";
import { Footer } from "@/components/molecules";

const Room = ({ match }) => {
	const { roomId } = match.params;
	const { t } = useTranslation();

	return (
		<Default header={<Navigation />} footer={<Footer />}>
			{!roomId ? (
				<div> {t("room.errorMessage")}</div>
			) : (
				<RoomHandler roomId={roomId} />
			)}
		</Default>
	);
};

Room.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.object.isRequired,
	}).isRequired,
};

Room.displayName = "RoomPage";

export default Room;
