import React from "react";
import PropTypes from "prop-types";

import { RoundedButton } from "./style";

const Button = ({ children, ...props }) => (
	<RoundedButton {...props}>{children}</RoundedButton>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Button;
