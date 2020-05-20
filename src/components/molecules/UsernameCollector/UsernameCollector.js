import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();
	const [formData, setFormData] = useState({ name: "", error: null });

	const handleInputChange = (e, key) => {
		const { value } = e.target;
		const regex = /^[a-zA-Z\s]*$/;

		if (regex.test(value)) {
			setFormData({ ...formData, [key]: value });
		}
	};

	const handleSubmit = () => {
		const name = !formData.name[0]
			? ""
			: replaceWhiteSpaces(
					formData.name[0].toUpperCase() + formData.name.substr(1)
			  );

		if (name.length < 3 || name.length > 12) {
			setFormData({
				...formData,
				error: t("modals.username.input.error"),
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
							{t("modals.username.title")}
						</Box>
					</Typography>
					<Typography gutterBottom>
						<Box component="span" color="text.primary">
							{t("modals.username.desc")}
						</Box>
					</Typography>
				</Box>
				<Box my={4}>
					<TextField
						placeholder={t("modals.username.input.label")}
						label={t("modals.username.input.label")}
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
						<Button onClick={handleSubmit}>
							{t(`modals.username.confirm.${textCommit}`)}
						</Button>
					</Grid>
					{onClose && (
						<Grid item>
							<Button onClick={onClose} color="secondary">
								{t("modals.username.cancel")}
							</Button>
						</Grid>
					)}
					{onReject && (
						<Grid item>
							<Button onClick={onReject} color="secondary">
								{t("modals.username.reject")}
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
	/**
	 * The locale identifier.
	 */
	textCommit: PropTypes.string.isRequired,
	onCommit: PropTypes.func.isRequired,
	onClose: PropTypes.func,
	onReject: PropTypes.func,
};

UsernameCollector.defaultProps = {
	textCommit: "createRoom",
	open: false,
	onClose: null,
	onReject: null,
};

export default UsernameCollector;
