import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Grid, Typography, TextField } from "@material-ui/core";

import { Button } from "@/components/atoms";

const ModalNewRoom = ({ open, onCreate, onClose }) => {
	const [formData, setFormData] = useState({ user: "", error: null });

	const handleInputChange = (e, key) => {
		const { value } = e.target;
		setFormData({ ...formData, [key]: value });
	};

	const handleSubmit = () => {
		if (formData.user.length < 3) {
			setFormData({
				...formData,
				error: "Must be at least 3 characters long.",
			});
		} else {
			const data = { ...formData, error: null };
			setFormData(data);
			onCreate(data);
		}
	};

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
							Almost ready...
						</Box>
					</Typography>
					<Typography gutterBottom>
						<Box component="span" color="text.primary">
							Just tell us how would you like others to call you.
						</Box>
					</Typography>
				</Box>
				<Box my={4}>
					<TextField
						placeholder="Your name"
						label="Your name"
						error={!!formData.error}
						helperText={formData.error}
						variant="outlined"
						fullWidth
						autoFocus
						required
						value={formData.user}
						onChange={e => handleInputChange(e, "user")}
					/>
				</Box>
				<Grid container justify="center" spacing={2}>
					<Grid item>
						<Button onClick={handleSubmit}>Create room</Button>
					</Grid>
					<Grid item>
						<Button onClick={onClose} color="info">
							Cancel
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Dialog>
	);
};

ModalNewRoom.propTypes = {
	open: PropTypes.bool,
	onCreate: PropTypes.func.isRequired,
	onClose: PropTypes.func,
};

ModalNewRoom.defaultProps = {
	open: false,
	onClose: null,
};

export default ModalNewRoom;
