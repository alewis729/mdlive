import React from "react";
import { SvgIcon } from "@material-ui/core";

const Logo = ({ ...props }) => (
	<SvgIcon {...props}>
		<path
			d="M4843.109,2353h-84.3V2101.791h84.3l62.02,84.057,62.98-84.057h83.82V2353h-84.3V2227.52l-62.5,80.666-62.02-80.666Z"
			transform="translate(-4758.805 -2101.791)"
			fill="#303030"
		/>
		<path
			d="M5095.3,2352.959l97.734-135.254h-58.465V2101.939h-77.656v115.766h-58.18Z"
			transform="translate(-4644.637 -2101.939)"
			fill="#303030"
		/>
		<circle
			cx="55"
			cy="55"
			r="55"
			transform="translate(610 70)"
			fill="#bc4242"
		/>
	</SvgIcon>
);

Logo.defaultProps = {
	width: "720",
	height: "251.211",
	viewBox: "0 0 720 251.211",
};

export default Logo;
