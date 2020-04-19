import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { setUsername } from "@/store/actions";
import { UsernameCollector } from "@/components/molecules";

const UsernameSetter = ({ shouldSaveNow, onSetUsername, onClose }) => {
	const { name: username } = useSelector(state => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (shouldSaveNow && username) handleSaveUsername();
		// eslint-disable-next-line
	}, [shouldSaveNow]);

	const handleSaveUsername = ({ user }) => {
		if (!username) {
			dispatch(setUsername(user));
			onClose();
		}
		onSetUsername();
	};

	return (
		<UsernameCollector
			open={shouldSaveNow && !username}
			onCommit={handleSaveUsername}
			onClose={onClose}
		/>
	);
};

UsernameSetter.propTypes = {
	shouldSaveNow: PropTypes.bool,
	onSetUsername: PropTypes.func.isRequired,
	onClose: PropTypes.func,
};

UsernameSetter.defaultProps = {
	shouldSaveNow: false,
};

export default UsernameSetter;
