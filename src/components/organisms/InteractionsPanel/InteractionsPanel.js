import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import {
	Drawer,
	AppBar,
	Tabs,
	Tab,
	Grid,
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
	const [open, setOpen] = useState(true);

	const handleChange = (_, newValue) => {
		setNewTab(newValue);
	};

	const handleChangeIndex = index => {
		setNewTab(index);
	};

	return (
		<>
			<Drawer
				open={true}
				variant="permanent"
				anchor="right"
				classes={{ paper: classes.buttonOpen }}
				onClick={() => setOpen(true)}
			>
				<MuiButton variant="contained" fullWidth onClick={() => setOpen(true)}>
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
						<Grid container>
							<Grid item xs={8}>
								<Tabs
									className={classes.tabs}
									value={tab}
									onChange={handleChange}
									indicatorColor="primary"
								>
									<Tab icon={<IconGroup />} />
									<Tab icon={<IconChat />} />
								</Tabs>
							</Grid>
							<Grid item xs={4}>
								<MuiButton
									className={classes.buttonClose}
									variant="contained"
									onClick={() => setOpen(false)}
								>
									<IconArrowRight />
								</MuiButton>
							</Grid>
						</Grid>
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
					</SwipeableViews>
				</div>
			</Drawer>
		</>
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
