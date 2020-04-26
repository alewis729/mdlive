import React from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Grid, Typography } from "@material-ui/core";

import { Button } from "@/components/atoms";

const ModalAuthorConfirm = ({ open, onMainAction, onClose }) => {
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
							Are you sure?
						</Box>
					</Typography>
					<Typography gutterBottom>
						<Box component="span" color="text.primary">
							You will lose author privilleges as soon as you make someone else
							an author.
						</Box>
					</Typography>
				</Box>
				<Grid container justify="center" spacing={2}>
					<Grid item>
						<Button onClick={onMainAction}>Yes, proceed</Button>
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

ModalAuthorConfirm.propTypes = {
	open: PropTypes.bool,
	onMainAction: PropTypes.func.isRequired,
	onClose: PropTypes.func,
};

ModalAuthorConfirm.defaultProps = {
	open: false,
	onClose: null,
};

export default ModalAuthorConfirm;
