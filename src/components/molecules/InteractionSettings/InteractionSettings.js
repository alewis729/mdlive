import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import {
	ShareRounded as IconShare,
	ExitToAppRounded as IconLeave,
} from "@material-ui/icons";

import { useStyles } from "./style";
import { Button } from "@/components/atoms";

const InteractionSettings = ({ users, renderUser, onInvite, onLeave }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box
				textAlign="center"
				bgcolor="background.light"
				className={classes.settings}
			>
				<Button
					fullWidth
					size="large"
					color="success"
					startIcon={<IconShare />}
					onClick={onInvite}
				>
					<Box py={0.5}>Invite others</Box>
				</Button>
				<Button
					fullWidth
					size="large"
					color="danger"
					startIcon={<IconLeave />}
					onClick={onLeave}
				>
					<Box py={0.5}>Leave room</Box>
				</Button>
			</Box>
			<Box p={2.5} className={classes.users}>
				{users.length === 0 ? (
					<Box textAlign="center">
						<Typography>There is no one else in the room.</Typography>
					</Box>
				) : (
					users.map(user => (
						<Box key={user.id} mb={1}>
							{renderUser(user)}
						</Box>
					))
				)}
			</Box>
		</div>
	);
};

InteractionSettings.propTypes = {
	users: PropTypes.array.isRequired,
	renderUser: PropTypes.func.isRequired,
	onInvite: PropTypes.func.isRequired,
	onLeave: PropTypes.func.isRequired,
};

export default InteractionSettings;
