import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { setUsername } from "@/store/actions";
import { UsernameCollector } from "@/components/molecules";

const UsernameSetter = ({ shouldSaveNow, role, onSetUsername, ...props }) => {
	const { name: username } = useSelector(state => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (shouldSaveNow && username) handleSaveUsername();
		// eslint-disable-next-line
	}, [shouldSaveNow]);

	const handleSaveUsername = ({ user }) => {
		if (!username) dispatch(setUsername(user, role));
		onSetUsername();
	};

	return (
		<UsernameCollector
			open={shouldSaveNow && !username}
			onCommit={handleSaveUsername}
			{...props}
		/>
	);
};

UsernameSetter.propTypes = {
	shouldSaveNow: PropTypes.bool,
	role: PropTypes.oneOf(["author", "editor", "viewer"]).isRequired,
	onSetUsername: PropTypes.func.isRequired,
};

UsernameSetter.defaultProps = {
	shouldSaveNow: false,
	role: "viewer",
};

export default UsernameSetter;
