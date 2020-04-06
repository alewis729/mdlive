import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Menu as MuiMenu,
	MenuItem,
	ListItemIcon,
	IconButton,
	Typography,
} from "@material-ui/core";
import { MoreVert as IconDots } from "@material-ui/icons";

import { useStyles } from "./style";

const Menu = ({ items, activeItems, onItemClick }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleItemClick = (id) => {
		handleClose();
		onItemClick(id);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
				<IconDots />
			</IconButton>
			<MuiMenu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
			>
				{items.map(
					(item) =>
						activeItems.includes(item.id) && (
							<MenuItem key={item.id} onClick={() => handleItemClick(item.id)}>
								<ListItemIcon className={classes.icon}>
									{item.icon}
								</ListItemIcon>
								<Typography variant="inherit" noWrap>
									{item.name}
								</Typography>
							</MenuItem>
						)
				)}
			</MuiMenu>
		</div>
	);
};

Menu.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			icon: PropTypes.node.isRequired,
		}).isRequired
	),
	activeItems: PropTypes.arrayOf(PropTypes.string.isRequired),
	onItemClick: PropTypes.func.isRequired,
};

Menu.defaultProps = {
	items: [
		{ id: "new-room", name: "New room", icon: <IconDots fontSize="small" /> },
		{
			id: "upload-file",
			name: "Upload a file",
			icon: <IconDots fontSize="small" />,
		},
		{
			id: "toggle-theme",
			name: "Toggle dark theme",
			icon: <IconDots fontSize="small" />,
		},
		{
			id: "change-language",
			name: "Change language",
			icon: <IconDots fontSize="small" />,
		},
		{ id: "register", name: "Register", icon: <IconDots fontSize="small" /> },
		{
			id: "allow-editing",
			name: "Allow editing",
			icon: <IconDots fontSize="small" />,
		},
		{
			id: "make-author",
			name: "Make author",
			icon: <IconDots fontSize="small" />,
		},
		{
			id: "request-to-leave",
			name: "Request to leave",
			icon: <IconDots fontSize="small" />,
		},
	],
	activeItems: [
		"new-room",
		"upload-file",
		"toggle-theme",
		"change-language",
		"register",
	],
};

export default Menu;
