import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Previewer, UserSetter } from "@/containers";
import { Default } from "@/components/templates";
import { Navigation, Footer } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { getRandomTextMd, getRandomAlphanumeric } from "@/helpers";

const defaultContent = getRandomTextMd();

const Index = () => {
	const router = useRouter();
	const currentUser = useSelector(state => state.users.current);
	const [content, setContent] = useState("");
	const [openModal, setOpenModal] = useState(false);

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
		// @todo: check if room id is already used!
		router.push("/room/[roomId]", `/room/${roomId}`);
	};

	return (
		<Default
			header={<Navigation onNavigate={handleNagivation} />}
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
						<Box component="span" color="text.accent">
							friend
						</Box>
					</Box>
				</Typography>
				<Typography gutterBottom>
					<Box component="span" color="text.primary">
						Just start typing in{" "}
						<Box
							component="span"
							color="text.accent"
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

Index.displayName = "IndexPage";

export default Index;
