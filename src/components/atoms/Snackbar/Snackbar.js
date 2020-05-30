import React from "react";
import PropTypes from "prop-types";

import { Snackbar as MuiSnackbar, IconButton } from "@material-ui/core";
import { Close as IconClose } from "@material-ui/icons";

const Snackbar = ({ open, message, onClose, ...props }) => (
	<MuiSnackbar
		open={open}
		autoHideDuration={3000}
		onClose={onClose}
		anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
		message={message}
		action={
			<IconButton size="small" color="inherit" onClick={onClose}>
				<IconClose fontSize="small" />
			</IconButton>
		}
		{...props}
	/>
);

Snackbar.propTypes = {
	open: PropTypes.bool.isRequired,
	message: PropTypes.any,
	onClose: PropTypes.func.isRequired,
};

export default Snackbar;
