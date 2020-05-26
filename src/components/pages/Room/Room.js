import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useModal } from "react-modal-hook";
import { useTranslation } from "react-i18next";

import { setLoading } from "@/store/actions";
import { UserSetter, RoomHandler } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation } from "@/components/organisms";
import { Footer } from "@/components/molecules";

const Room = ({ match }) => {
	const history = useHistory();
	const { roomId } = match.params;
	const currentUser = useSelector(state => state.users.current);
	const dispatch = useDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		if (!currentUser.name) {
			showModal();
			dispatch(setLoading(true));
		} else dispatch(setLoading(false));

		return () => dispatch(setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser]);

	const handleReject = () => {
		hideModal();
		history.push("/");
	};

	const [showModal, hideModal] = useModal(({ in: open }) => (
		<UserSetter
			open={open}
			onSubmitUsername={hideModal}
			textCommit="joinRoom"
			onReject={handleReject}
		/>
	));

	return (
		<Default header={<Navigation />} footer={<Footer />}>
			{!roomId ? (
				<div>{t("room.errorMessage")}</div>
			) : (
				currentUser.name && <RoomHandler roomId={roomId} />
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
