import React from "react";
import PropTypes from "prop-types";

import { RoundedButton } from "./style";

const Button = ({ onClick, children, ...props }) => {
	return (
		<RoundedButton {...props} onClick={onClick}>
			{children}
		</RoundedButton>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Button;
