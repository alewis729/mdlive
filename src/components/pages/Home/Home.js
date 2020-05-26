import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useModal } from "react-modal-hook";
import { Box, Typography } from "@material-ui/core";

import { useRandomPhrase } from "@/hooks";
import { updatePreviewerContent } from "@/store/actions";
import { Previewer, UserSetter } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation } from "@/components/organisms";
import { Footer } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { getRandomAlphanumeric } from "@/helpers";

const Home = () => {
	const history = useHistory();
	const currentUser = useSelector(state => state.users.current);
	const currentLang = useSelector(state => state.settings.currentLang);
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [greetPhrase, getNewPhrase] = useRandomPhrase();
	const [content, setContent] = useState(greetPhrase);

	useEffect(() => {
		if (content === greetPhrase) {
			const newPhrase = getNewPhrase();
			setContent(newPhrase);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentLang]);

	const handleUserSetter = () => {
		if (currentUser.name) handleCreateRoom();
		else showUserSetter();
	};

	const handleCreateRoom = () => {
		if (content !== greetPhrase) {
			dispatch(updatePreviewerContent(content));
		}

		hideUserSetter();
		const roomId = getRandomAlphanumeric();
		history.push(`/room/${roomId}`);
	};

	const [showUserSetter, hideUserSetter] = useModal(
		({ in: open }) => (
			<UserSetter
				open={open}
				role="author"
				onSubmitUsername={handleCreateRoom}
				onClose={hideUserSetter}
			/>
		),
		[content]
	);

	return (
		<Default
			header={<Navigation onNewRoom={handleUserSetter} />}
			footer={<Footer />}
		>
			<Box textAlign="center">
				<Typography variant="h3" gutterBottom>
					<Box
						fontWeight="fontWeightSemibold"
						component="span"
						color="text.primary"
					>
						{t("home.welcome")}{" "}
						<Box component="span" color="text.hint">
							{t("home.friend")}
						</Box>
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						{t("home.type")}{" "}
						<Box
							component="span"
							color="text.hint"
							fontWeight="fontWeightSemibold"
						>
							{t("home.markdown")}
						</Box>{" "}
						{t("home.andSee")}
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						{t("home.inviteOthers")}
					</Box>
				</Typography>
				<Box mt={2}>
					<Button onClick={handleUserSetter}>{t("buttons.newRoom")}</Button>
				</Box>
				<Previewer
					userRole="author"
					defaultContent={content}
					onEdit={previewerContent => setContent(previewerContent)}
				/>
			</Box>
		</Default>
	);
};

Home.displayName = "HomePage";

export default Home;
