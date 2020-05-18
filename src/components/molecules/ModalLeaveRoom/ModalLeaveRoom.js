import React from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Grid, Typography } from "@material-ui/core";

import { Button } from "@/components/atoms";

const ModalLeaveRoom = ({ open, onMainAction, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose} maxWidth="lg">
			<Box py={4} px={10} textAlign="center">
				<Box maxWidth={450} mb={3}>
					<Typography variant="h4" gutterBottom>
						<Box
							fontWeight="fontWeightSemibold"
							component="span"
							color="text.primary"
						>
							You are about to leave
						</Box>
					</Typography>
					<Typography gutterBottom>
						<Box component="span" color="text.primary">
							If you leve the room you may never be able to see the md file.
							Confirm that you want to abandon the room.
						</Box>
					</Typography>
				</Box>
				<Grid container justify="center" spacing={2}>
					<Grid item>
						<Button onClick={onMainAction}>Leave room</Button>
					</Grid>
					<Grid item>
						<Button onClick={onClose} color="secondary">
							Cancel
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Dialog>
	);
};

ModalLeaveRoom.propTypes = {
	open: PropTypes.bool,
	onMainAction: PropTypes.func.isRequired,
	onClose: PropTypes.func
};

ModalLeaveRoom.defaultProps = {
	open: false,
	onClose: null
};

export default ModalLeaveRoom;
