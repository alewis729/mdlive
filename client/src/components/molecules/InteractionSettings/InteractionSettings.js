import React from "react";
import PropTypes from "prop-types";
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListItemSecondaryAction,
	Avatar
} from "@material-ui/core";
import {
	ShareRounded as IconShare,
	ExitToAppRounded as IconLeave
} from "@material-ui/icons";

import { useStyles } from "./style";
import { Button } from "@/components/atoms";
import { Menu } from "@/components/molecules";

const InteractionSettings = ({
	currentUser,
	users,
	onUserMenuAction,
	onInvite,
	onLeave
}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box
				textAlign="center"
				bgcolor="background.default"
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
					color="error"
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
					<List>
						{users.map((user) => (
							<ListItem key={user.id} disableGutters>
								<ListItemAvatar>
									<Avatar className={classes.avatar}>{user.name[0]}</Avatar>
								</ListItemAvatar>
								<ListItemText primary={user.name} />
								{currentUser.role === "author" && currentUser.id !== user.id && (
									<ListItemSecondaryAction>
										<Menu
											items={[
												"make-author",
												"make-editor",
												"make-viewer",
												"kick"
											]}
											onItemClick={(item) =>
												onUserMenuAction && onUserMenuAction(user.id, item)
											}
										/>
									</ListItemSecondaryAction>
								)}
							</ListItem>
						))}
					</List>
				)}
			</Box>
		</div>
	);
};

InteractionSettings.propTypes = {
	currentUser: PropTypes.shape({
		id: PropTypes.string.isRequired,
		role: PropTypes.oneOf(["author", "editor", "viewer"])
	}).isRequired,
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			role: PropTypes.oneOf(["author", "editor", "viewer"])
		})
	).isRequired,
	onUserMenuAction: PropTypes.func,
	onInvite: PropTypes.func.isRequired,
	onLeave: PropTypes.func.isRequired
};

InteractionSettings.defaultProps = {
	onUserMenuAction: null
};

export default InteractionSettings;
