import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Grid, Typography, TextField } from "@material-ui/core";

import { useStyles } from "./style";
import { Button } from "@/components/atoms";

const ModalNewRoom = ({ open, onCreate, onClose }) => {
	const classes = useStyles();
	const [formData, setFormData] = useState({ user: "", room: "", error: null });

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
			setFormData({ ...formData, error: null });
			onCreate(formData);
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
							Just tell us how would you like others to call you and what the
							room name should be.
						</Box>
					</Typography>
				</Box>
				<Box my={4}>
					<Grid
						container
						direction="column"
						spacing={3}
						className={classes.inputs}
					>
						<Grid item>
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
						</Grid>
						<Grid item>
							<TextField
								placeholder="Room name"
								label="Room name"
								variant="outlined"
								fullWidth
								value={formData.room}
								onChange={e => handleInputChange(e, "room")}
							/>
						</Grid>
					</Grid>
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
