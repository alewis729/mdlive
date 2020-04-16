import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import { setUsername } from "@/store/actions";
import { ModalNewRoom } from "@/components/molecules";
import { getRandomAlphanumeric } from "@/helpers";

const RoomCreator = ({ open, onCloseModal, setUsername }) => {
	const router = useRouter();

	const handleCreateNewRoom = data => {
		setUsername(data);
		onCloseModal();
		const roomId = getRandomAlphanumeric();
		router.push(`/room/${roomId}`);
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
	setUsername: PropTypes.func.isRequired,
};

RoomCreator.defaultProps = {
	open: false,
};

export default connect(null, { setUsername })(RoomCreator);
