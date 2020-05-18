import React from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Typography } from "@material-ui/core";

import { Button } from "@/components/atoms";

const ModalShareRoom = ({ open, room, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose} maxWidth="lg">
			<Box py={4} px={10} textAlign="center">
				<Box maxWidth={450}>
					<Typography variant="h4" gutterBottom>
						<Box
							fontWeight="fontWeightSemibold"
							component="span"
							color="text.primary"
						>
							Invite others
						</Box>
					</Typography>
					<Typography gutterBottom>
						<Box component="span" color="text.primary">
							Share this link with people you want in the room.
						</Box>
					</Typography>
				</Box>
				<Box maxWidth={450} my={4}>
					<Typography>
						<Box
							fontWeight="fontWeightSemibold"
							component="span"
							color="text.primary"
						>
							{room}
						</Box>
					</Typography>
				</Box>
				<Button onClick={onClose}>Ok, great</Button>
			</Box>
		</Dialog>
	);
};

ModalShareRoom.propTypes = {
	open: PropTypes.bool,
	room: PropTypes.string.isRequired,
	onClose: PropTypes.func
};

ModalShareRoom.defaultProps = {
	open: false,
	onClose: null
};

export default ModalShareRoom;
