import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import {
	ShareRounded as IconShare,
	ExitToAppRounded as IconLeave,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { Button } from "@/components/atoms";

const settingsHeight = 100;

const useStyles = makeStyles({
	root: {
		height: "100%",
		overflow: "hidden",
	},
	settings: {
		height: settingsHeight,
	},
	people: {
		overflowY: "auto",
		height: `calc(100% - ${settingsHeight}px)`,
	},
});

const Share = ({ people, renderPerson }) => {
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
					color="info"
					startIcon={<IconShare />}
					onClick={() => console.log("invite others modal")}
				>
					<Box py={0.5}>Invite others</Box>
				</Button>
				<Button
					fullWidth
					size="large"
					color="danger"
					startIcon={<IconLeave />}
					onClick={() => console.log("leave room")}
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

Share.propTypes = {
	people: PropTypes.array.isRequired,
	renderPerson: PropTypes.func.isRequired,
};

export default Share;
