import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import {
	ShareRounded as IconShare,
	ExitToAppRounded as IconLeave,
} from "@material-ui/icons";

import { useStyles } from "./style";
import { Button } from "@/components/atoms";

const InteractionSettings = ({ people, renderPerson, onInvite, onLeave }) => {
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
			<Box p={2.5} className={classes.people}>
				{people.length === 0 ? (
					<Box textAlign="center">
						<Typography>There is no one else in the room.</Typography>
					</Box>
				) : (
					people.map(person => (
						<Box key={person.id} mb={1}>
							{renderPerson(person)}
						</Box>
					))
				)}
			</Box>
		</div>
	);
};

InteractionSettings.propTypes = {
	people: PropTypes.array.isRequired,
	renderPerson: PropTypes.func.isRequired,
	onInvite: PropTypes.func.isRequired,
	onLeave: PropTypes.func.isRequired,
};

export default InteractionSettings;
