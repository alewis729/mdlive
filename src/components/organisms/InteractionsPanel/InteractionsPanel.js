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
	Button as MuiButton,
} from "@material-ui/core";
import {
	ArrowBackRounded as IconArrowLeft,
	ArrowForwardRounded as IconArrowRight,
	GroupAddRounded as IconGroup,
	QuestionAnswerRounded as IconChat,
} from "@material-ui/icons";

import { useStyles } from "./style";
import TabPanel from "./TabPanel";

const InteractionsPanel = ({ renderSettings, renderChat }) => {
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
							{renderSettings()}
						</TabPanel>
						<TabPanel value={tab} index={1} dir={theme.direction}>
							{renderChat()}
						</TabPanel>
					</SwipeableViews>
				</div>
			</Drawer>
		</>
	);
};

InteractionsPanel.propTypes = {
	renderSettings: PropTypes.func.isRequired,
	renderChat: PropTypes.func.isRequired,
};

export default InteractionsPanel;
