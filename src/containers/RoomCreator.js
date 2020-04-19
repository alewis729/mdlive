import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import { setUsername } from "@/store/actions";
import { ModalNewRoom } from "@/components/molecules";
import { getRandomAlphanumeric } from "@/helpers";

const RoomCreator = ({ openModal, onClose, username, setUsername }) => {
	const router = useRouter();

	useEffect(() => {
		if (openModal && username) handleCreateNewRoom();
		// eslint-disable-next-line
	}, [openModal]);

	const handleCreateNewRoom = data => {
		if (!username) {
			setUsername(data.user);
			onClose();
		}
		const roomId = getRandomAlphanumeric();
		router.push(`/room/${roomId}`);
	};

	return (
		<ModalNewRoom
			open={openModal && !username}
			onCreate={handleCreateNewRoom}
			onClose={onClose}
		/>
	);
};

RoomCreator.propTypes = {
	openModal: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
	username: PropTypes.string,
	setUsername: PropTypes.func.isRequired,
};

RoomCreator.defaultProps = {
	openModal: false,
};

const mapStateToProps = state => ({
	username: state.user.name,
});

export default connect(mapStateToProps, { setUsername })(RoomCreator);
