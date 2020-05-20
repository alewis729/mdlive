import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Dialog, Box, Typography } from "@material-ui/core";

import { Button } from "@/components/atoms";

const ModalShareRoom = ({ open, room, onClose }) => {
	const { t } = useTranslation();

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
							{t("modals.invite.title")}
						</Box>
					</Typography>
					<Typography gutterBottom>
						<Box component="span" color="text.primary">
							{t("modals.invite.desc")}
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
				<Button onClick={onClose}>{t("modals.invite.confirm")}</Button>
			</Box>
		</Dialog>
	);
};

ModalShareRoom.propTypes = {
	open: PropTypes.bool,
	room: PropTypes.string.isRequired,
	onClose: PropTypes.func,
};

ModalShareRoom.defaultProps = {
	open: false,
	onClose: null,
};

export default ModalShareRoom;
