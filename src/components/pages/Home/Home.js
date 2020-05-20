import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Previewer, UserSetter } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation, Footer } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { getRandomTextMd, getRandomAlphanumeric } from "@/helpers";

const defaultContent = getRandomTextMd();

const Home = () => {
	const history = useHistory();
	const currentUser = useSelector(state => state.users.current);
	const [content, setContent] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const { t } = useTranslation();

	useEffect(() => setContent(defaultContent), []);

	const handleNagivation = action => {
		if (action === "new-room") handleUserSetter();
	};

	const handleUserSetter = () => {
		if (!currentUser) setOpenModal(true);
		else handleCreateRoom();
	};

	const handleCreateRoom = () => {
		setOpenModal(false);
		const roomId = getRandomAlphanumeric();
		history.push(`/room/${roomId}`); // @todo: check if room id is already used!
	};

	return (
		<Default
			header={
				<Navigation
					onNavigate={handleNagivation}
					items={["new-room", "toggle-theme", "change-language"]}
				/>
			}
			footer={<Footer />}
		>
			<UserSetter
				open={openModal}
				role="author"
				onSubmitUsername={handleCreateRoom}
				onClose={() => setOpenModal(false)}
			/>
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
				<Previewer userRole="author" defaultContent={content} />
			</Box>
		</Default>
	);
};

Home.displayName = "HomePage";

export default Home;
