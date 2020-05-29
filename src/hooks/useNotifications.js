import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useModal } from "react-modal-hook";
import { Typography } from "@material-ui/core";

import { clearAlert } from "@/store/actions";
import { Snackbar } from "@/components/atoms";

const useNotifications = () => {
	const { current: currentUser } = useSelector(state => state.users);
	const alert = useSelector(state => state.settings.alert);
	const dispatch = useDispatch();

	useEffect(() => {
		if (alert.type === "connect") showSnackbarConnect();
		else if (alert.type === "disconnect") showSnackbarDisconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [alert]);

	const [showSnackbarConnect, hideSnackbarConnect] = useModal(
		({ in: open }) => (
			<Snackbar
				open={open}
				onClose={() => {
					clearAlert();
					hideSnackbarConnect();
				}}
				onExited={() => dispatch(clearAlert())}
				message={
					<Typography>
						<b>{alert.user}</b> joined the room.
					</Typography>
				}
			/>
		),
		[alert.user]
	);

	const [showSnackbarDisconnect, hideSnackbarDisconnect] = useModal(
		({ in: open }) => (
			<Snackbar
				open={open}
				onClose={() => {
					clearAlert();
					hideSnackbarDisconnect();
				}}
				onExited={() => dispatch(clearAlert())}
				message={
					<Typography>
						<b>{alert.user}</b> left the room.
					</Typography>
				}
			/>
		),
		[alert.user]
	);

	const [showSnackbarRoleUpdate, hideSnackbarRoleUpdate] = useModal(
		({ in: open }) => (
			<Snackbar
				open={open}
				onClose={hideSnackbarRoleUpdate}
				message={
					<Typography>
						Your role was changed to <b>{currentUser.role}</b>.
					</Typography>
				}
			/>
		),
		[currentUser.role]
	);

	const closeAllSnackbars = () => {
		hideSnackbarConnect();
		hideSnackbarDisconnect();
		hideSnackbarRoleUpdate();
	};

	return { showSnackbarRoleUpdate, closeAllSnackbars };
};

export default useNotifications;
