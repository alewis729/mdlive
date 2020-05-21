import React from "react";
import { useModal } from "react-modal-hook";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@material-ui/core";

import { Modal } from "@/components/molecules";
import { Button } from "@/components/atoms";

const useInteractionModals = ({
	fullUrl,
	onModalLeaveConfirm,
	onModalKickedConfirm,
	onModalAuthorConfirm,
	onModalAuthorCancel,
}) => {
	const { t } = useTranslation();

	const closeAllModals = () => {
		hideModalInvite();
		hideModalLeave();
		hideModalKicked();
		hideModalAuthor();
	};

	const [showModalInvite, hideModalInvite] = useModal(({ in: open }) => (
		<Modal
			open={open}
			onConfirm={hideModalInvite}
			onClose={hideModalInvite}
			title={t("modals.invite.title")}
			desc={t("modals.invite.desc")}
		>
			<>
				<Box maxWidth={450} my={4}>
					<Typography>
						<Box
							fontWeight="fontWeightSemibold"
							component="span"
							color="text.primary"
						>
							{fullUrl}
						</Box>
					</Typography>
				</Box>
				<Button onClick={hideModalInvite}>{t("modals.invite.confirm")}</Button>
			</>
		</Modal>
	));

	const [showModalLeave, hideModalLeave] = useModal(({ in: open }) => (
		<Modal
			open={open}
			onConfirm={onModalLeaveConfirm}
			onClose={hideModalLeave}
			title={t("modals.leave.title")}
			desc={t("modals.leave.desc")}
			textConfirm={t("modals.leave.confirm")}
			textCancel={t("modals.leave.cancel")}
		/>
	));

	const [showModalKicked, hideModalKicked] = useModal(({ in: open }) => (
		<Modal
			open={!open}
			onConfirm={onModalKickedConfirm}
			onClose={onModalKickedConfirm}
			title={t("modals.kicked.title")}
			desc={t("modals.kicked.desc")}
			textConfirm={t("modals.kicked.confirm")}
		/>
	));

	const [showModalAuthor, hideModalAuthor] = useModal(({ in: open }) => (
		<Modal
			open={open}
			onConfirm={onModalAuthorConfirm}
			onClose={onModalAuthorCancel}
			title={t("modals.author.title")}
			desc={t("modals.author.desc")}
			textConfirm={t("modals.author.confirm")}
			textCancel={t("modals.author.cancel")}
		/>
	));

	return {
		showModalInvite,
		showModalLeave,
		showModalKicked,
		showModalAuthor,
		hideModalLeave,
		hideModalKicked,
		hideModalAuthor,
		closeAllModals,
	};
};

export default useInteractionModals;
