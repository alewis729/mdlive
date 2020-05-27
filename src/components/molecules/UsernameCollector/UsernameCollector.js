import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Box, TextField } from "@material-ui/core";

import { replaceWhiteSpaces } from "@/helpers";
import { Modal } from "@/components/molecules";

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
		<Modal
			open={open}
			onConfirm={handleSubmit}
			onClose={onClose}
			onReject={onReject}
			title={t("modals.username.title")}
			desc={t("modals.username.desc")}
			textConfirm={t(`modals.username.confirm.${textCommit}`)}
			textCancel={
				onReject ? t("modals.username.reject") : t("modals.leave.cancel")
			}
		>
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
		</Modal>
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
