import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
	Menu as MuiMenu,
	MenuItem,
	ListItemIcon,
	IconButton,
	Typography,
} from "@material-ui/core";
import { MoreVert as IconDots } from "@material-ui/icons";

import { useStyles } from "./style";
import { menuItems, menuItemIds } from "./menuItems";

const Menu = ({ items, onItemClick }) => {
	const { t } = useTranslation();
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
				{menuItems.map(
					({ id, icon }) =>
						items.includes(id) && (
							<MenuItem key={id} onClick={() => handleItemClick(id)}>
								{icon && (
									<ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
								)}
								<Typography variant="inherit" noWrap>
									{t(`menu.${id}`)}
								</Typography>
							</MenuItem>
						)
				)}
			</MuiMenu>
		</div>
	);
};

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.oneOf(menuItemIds)),
	onItemClick: PropTypes.func.isRequired,
};

Menu.defaultProps = {
	items: ["new-room", "toggle-theme", "change-language"],
};

export default Menu;
