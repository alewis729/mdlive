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
import items from "./menuItems";

const Menu = ({ activeItems, onItemClick }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleItemClick = id => {
		handleClose();
		onItemClick(id);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton size="small" onClick={e => setAnchorEl(e.currentTarget)}>
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
					item =>
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
	activeItems: PropTypes.arrayOf(PropTypes.string.isRequired),
	onItemClick: PropTypes.func.isRequired,
};

Menu.defaultProps = {
	activeItems: [
		"new-room",
		"upload-file",
		"toggle-theme",
		"change-language",
		"register",
	],
};

export default Menu;
