import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import { ModalNewRoom } from "@/components/molecules";
import { getRandomAlphanumeric } from "@/helpers";

const RoomCreator = ({ open, onCloseModal }) => {
	const router = useRouter();

	const handleCreateNewRoom = data => {
		console.log(data);
		const roomId = getRandomAlphanumeric();
		const pathname = `/room/${roomId}`;
		router.push({ pathname });
	};

	return (
		<ModalNewRoom
			open={open}
			onCreate={handleCreateNewRoom}
			onClose={onCloseModal}
		/>
	);
};

RoomCreator.propTypes = {
	open: PropTypes.bool,
	onCloseModal: PropTypes.func.isRequired,
};

RoomCreator.defaultProps = {
	open: false,
};

export default RoomCreator;
