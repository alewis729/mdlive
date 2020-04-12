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
import Share from "./Share";
import Chat from "./Chat";

const TabPanel = ({ children, value, index, ...props }) => {
	return (
		<Box role="tabpanel" height="100%" hidden={value !== index} {...props}>
			{value === index && children}
		</Box>
	);
};

// eslint-disable-next-line
const InteractionsPanel = ({ people, chat, onLeave }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [tab, setNewTab] = useState(1);
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
				classes={{ paper: classes.buttonOpen }}
				variant="permanent"
				anchor="right"
				onClick={() => setOpen(true)}
			>
				<MuiButton fullWidth onClick={() => setOpen(true)}>
					<IconArrowLeft />
				</MuiButton>
			</Drawer>
			<Drawer
				classes={{ paper: classes.drawer }}
				open={open}
				variant="persistent"
				anchor="right"
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
									onClick={() => setOpen(false)}
								>
									<IconArrowRight />
								</MuiButton>
							</Grid>
						</Grid>
					</AppBar>
					<SwipeableViews
						className={classes.main}
						axis={theme.direction === "rtl" ? "x-reverse" : "x"}
						index={tab}
						onChangeIndex={handleChangeIndex}
					>
						<TabPanel value={tab} index={0} dir={theme.direction}>
							<Share
								people={[]}
								renderPerson={person => <Box>{person.name}</Box>}
							/>
						</TabPanel>
						<TabPanel value={tab} index={1} dir={theme.direction}>
							<Chat />
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
