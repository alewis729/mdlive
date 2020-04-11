import React from "react";
import PropTypes from "prop-types";

import { RoundedButton } from "./style";

const Button = ({ color, children, ...props }) => (
	<RoundedButton color={color} {...props}>
		{children}
	</RoundedButton>
);

Button.propTypes = {
	color: PropTypes.oneOf(["primary", "success", "danger", "info"]),
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	color: "primary",
};

export default Button;
