import React from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Grid, Typography } from "@material-ui/core";

import { Button } from "@/components/atoms";

const Modal = ({
	open,
	title,
	desc,
	textConfirm,
	textCancel,
	children,
	onConfirm,
	onClose,
}) => (
	<Dialog open={open} onClose={onClose} maxWidth="lg">
		<Box py={4} px={10} textAlign="center">
			<Box maxWidth={450} mb={3}>
				<Typography variant="h4" gutterBottom>
					<Box
						fontWeight="fontWeightSemibold"
						component="span"
						color="text.primary"
					>
						{title}
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						{desc}
					</Box>
				</Typography>
			</Box>
			{children}
			{(textConfirm || textCancel) && (
				<Grid container justify="center" spacing={2}>
					{onConfirm && textConfirm && (
						<Grid item>
							<Button onClick={onConfirm}>{textConfirm}</Button>
						</Grid>
					)}
					{onClose && textCancel && (
						<Grid item>
							<Button onClick={onClose} color="secondary">
								{textCancel}
							</Button>
						</Grid>
					)}
				</Grid>
			)}
		</Box>
	</Dialog>
);

Modal.propTypes = {
	open: PropTypes.bool,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	textConfirm: PropTypes.string,
	textCancel: PropTypes.string,
	children: PropTypes.any,
	onConfirm: PropTypes.func,
	onClose: PropTypes.func,
};

Modal.defaultProps = {
	open: false,
	textCancel: null,
	onConfirm: null,
	onClose: null,
};

export default Modal;
