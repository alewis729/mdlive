import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import {
	Drawer,
	AppBar,
	Tabs,
	Tab,
	Typography,
	Box,
	Button as MuiButton,
} from "@material-ui/core";
import {
	ArrowBackRounded as IconArrowLeft,
	ArrowForwardRounded as IconArrowRight,
	GroupAddRounded as IconGroup,
	QuestionAnswerRounded as IconChat,
} from "@material-ui/icons";

import { useStyles } from "./style";

const TabPanel = ({ children, value, index, ...props }) => {
	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			{...props}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
};

// eslint-disable-next-line
const InteractionsPanel = ({ people, chat, onLeave }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [tab, setNewTab] = useState(0);
	const [open, setOpen] = useState(false);

	const handleChange = (_, newValue) => {
		setNewTab(newValue);
	};

	const handleChangeIndex = index => {
		setNewTab(index);
	};

	return (
		<div className={classes.root}>
			<Drawer
				open={true}
				variant="permanent"
				anchor="right"
				classes={{ paper: classes.openButton }}
				onClick={() => setOpen(true)}
			>
				<MuiButton
					variant="contained"
					color="info"
					fullWidth
					onClick={() => setOpen(true)}
				>
					<IconArrowLeft />
				</MuiButton>
			</Drawer>
			<Drawer
				classes={{ paper: classes.drawer }}
				variant="persistent"
				open={open}
				anchor="right"
				// onClose={}
			>
				<div className={classes.content}>
					<AppBar position="static" color="default">
						<Tabs value={tab} onChange={handleChange} indicatorColor="primary">
							<Tab icon={<IconGroup />} />
							<Tab icon={<IconChat />} />
							{/* <Tab icon={<IconLeave />} onClick={() => setOpen(false)} /> */}
							{/* <div
							onClick={() => setOpen(false)}>
							</div> */}
							<MuiButton
								variant="contained"
								color="info"
								fullWidth
								onClick={() => setOpen(false)}
							>
								<IconArrowRight />
							</MuiButton>
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === "rtl" ? "x-reverse" : "x"}
						index={tab}
						onChangeIndex={handleChangeIndex}
					>
						<TabPanel value={tab} index={0} dir={theme.direction}>
							Item One
						</TabPanel>
						<TabPanel value={tab} index={1} dir={theme.direction}>
							Item Two
						</TabPanel>
						<TabPanel value={tab} index={2} dir={theme.direction}>
							Item Three
						</TabPanel>
					</SwipeableViews>
				</div>
			</Drawer>
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

InteractionsPanel.propTypes = {
	people: PropTypes.object,
	chat: PropTypes.object,
	onLeave: PropTypes.func,
};

export default InteractionsPanel;
