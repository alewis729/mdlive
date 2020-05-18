import React from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Grid, Typography } from "@material-ui/core";

import { Button } from "@/components/atoms";

const ModalKicked = ({ open, onMainAction, onClose }) => {
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
							You were kicked
						</Box>
					</Typography>
					<Typography gutterBottom>
						<Box component="span" color="text.primary">
							Unfortunately you were kicked out the room.
						</Box>
					</Typography>
				</Box>
				<Grid container justify="center" spacing={2}>
					<Grid item>
						<Button onClick={onMainAction}>I understand</Button>
					</Grid>
				</Grid>
			</Box>
		</Dialog>
	);
};

ModalKicked.propTypes = {
	open: PropTypes.bool,
	onMainAction: PropTypes.func.isRequired,
	onClose: PropTypes.func
};

ModalKicked.defaultProps = {
	open: false,
	onClose: null
};

export default ModalKicked;
