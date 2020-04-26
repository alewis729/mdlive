import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Previewer, UserSetter } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation, Footer } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { getRandomTextMd, getRandomAlphanumeric } from "@/helpers";

const defaultContent = getRandomTextMd();

const Index = ({ darkMode }) => {
	const router = useRouter();
	const currentUser = useSelector(state => state.users.current);
	const [content, setContent] = useState("");
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => setContent(defaultContent), []);

	const handleNagivation = action => {
		if (action === "new-room") handleUserSetter();
		else if (action === "toggle-theme") darkMode.toggle();
	};

	const handleUserSetter = () => {
		if (!currentUser) setOpenModal(true);
		else handleCreateRoom();
	};

	const handleCreateRoom = () => {
		setOpenModal(false);
		const roomId = getRandomAlphanumeric();
		// @todo: check if room id is already used!
		router.push("/room/[roomId]", `/room/${roomId}`);
	};

	return (
		<Default
			header={
				<Navigation
					onNavigate={handleNagivation}
					items={["new-room", "toggle-theme"]}
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
						Welcome{" "}
						<Box component="span" color="text.hint">
							friend
						</Box>
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						Just start typing in{" "}
						<Box
							component="span"
							color="text.hint"
							fontWeight="fontWeightSemibold"
						>
							markdown
						</Box>{" "}
						and see a live preview.
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						You can also invite others to join and interact live by making a new
						room.
					</Box>
				</Typography>
				<Box mt={2}>
					<Button onClick={handleUserSetter}>New room</Button>
				</Box>
				<Previewer userRole="author" defaultContent={content} />
			</Box>
		</Default>
	);
};

Index.propTypes = {
	darkMode: PropTypes.object.isRequired,
};

Index.displayName = "IndexPage";

export default Index;
