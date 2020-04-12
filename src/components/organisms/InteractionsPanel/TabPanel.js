import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

const TabPanel = ({ children, value, index, ...props }) => (
	<Box role="tabpanel" height="100%" hidden={value !== index} {...props}>
		{value === index && children}
	</Box>
);

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default TabPanel;
