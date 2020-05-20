import React from "react";
import {
	AddCircleOutlineRounded as IconNew,
	CloudUploadRounded as IconUpload,
	Brightness4Rounded as IconTheme,
	LanguageRounded as IconLang,
	AccountCircleRounded as IconUser,
	EditRounded as IconEdit,
	VisibilityRounded as IconView,
	SupervisorAccountRounded as IconAdmin,
	RemoveCircleRounded as IconRemove
} from "@material-ui/icons";

export const menuItemIds = [
	"new-room",
	"upload-file",
	"toggle-theme",
	"change-language",
	"register",
	"make-author",
	"make-editor",
	"make-viewer",
	"kick"
];

export const menuItems = [
	{ id: "new-room", icon: <IconNew fontSize="small" /> },
	{ id: "upload-file", icon: <IconUpload fontSize="small" /> },
	{ id: "toggle-theme", icon: <IconTheme fontSize="small" /> },
	{ id: "change-language", icon: <IconLang fontSize="small" /> },
	{ id: "register", icon: <IconUser fontSize="small" /> },
	{ id: "make-author", icon: <IconAdmin fontSize="small" /> },
	{ id: "make-editor", icon: <IconEdit fontSize="small" /> },
	{ id: "make-viewer", icon: <IconView fontSize="small" /> },
	{ id: "kick", icon: <IconRemove fontSize="small" /> }
];
