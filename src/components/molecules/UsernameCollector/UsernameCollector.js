import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Box, Grid, Typography, TextField } from "@material-ui/core";

import { replaceWhiteSpaces } from "@/helpers";
import { Button } from "@/components/atoms";

const UsernameCollector = ({
	open,
	textCommit,
	onCommit,
	onClose,
	onReject,
}) => {
	const [formData, setFormData] = useState({ name: "", error: null });

	const handleInputChange = (e, key) => {
		const { value } = e.target;
		const regex = /^[a-zA-Z\s]*$/;

		if (regex.test(value)) {
			setFormData({ ...formData, [key]: value });
		}
	};

	const handleSubmit = () => {
		const name = replaceWhiteSpaces(
			formData.name[0].toUpperCase() + formData.name.substr(1)
		);

		if (name.length < 3 || name.length > 12) {
			setFormData({
				...formData,
				error: "Nmae must be between 3 and 12 characters long.",
			});
		} else {
			const data = { name, error: null };
			setFormData(data);
			onCommit(data);
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
							Just tell us how you would like others to call you.
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
						value={formData.name}
						onKeyDown={e => (e.keyCode === 13 ? handleSubmit() : null)}
						onChange={e => handleInputChange(e, "name")}
					/>
				</Box>
				<Grid container justify="center" spacing={2}>
					<Grid item>
						<Button onClick={handleSubmit}>{textCommit}</Button>
					</Grid>
					{onClose && (
						<Grid item>
							<Button onClick={onClose} color="info">
								Cancel
							</Button>
						</Grid>
					)}
					{onReject && (
						<Grid item>
							<Button onClick={onReject} color="info">
								Reject invitation
							</Button>
						</Grid>
					)}
				</Grid>
			</Box>
		</Dialog>
	);
};

UsernameCollector.propTypes = {
	open: PropTypes.bool,
	textCommit: PropTypes.string,
	onCommit: PropTypes.func.isRequired,
	onClose: PropTypes.func,
	onReject: PropTypes.func,
};

UsernameCollector.defaultProps = {
	textCommit: "Create room",
	open: false,
	onClose: null,
	onReject: null,
};

export default UsernameCollector;
