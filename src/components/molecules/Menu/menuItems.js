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
	RemoveCircleRounded as IconRemove,
} from "@material-ui/icons";

const items = [
	{
		id: "new-room",
		name: "New room",
		icon: <IconNew fontSize="small" />,
	},
	{
		id: "upload-file",
		name: "Upload a file",
		icon: <IconUpload fontSize="small" />,
	},
	{
		id: "toggle-theme",
		name: "Toggle dark theme",
		icon: <IconTheme fontSize="small" />,
	},
	{
		id: "change-language",
		name: "Change language",
		icon: <IconLang fontSize="small" />,
	},
	{
		id: "register",
		name: "Register",
		icon: <IconUser fontSize="small" />,
	},
	{
		id: "make-author",
		name: "Make author",
		icon: <IconAdmin fontSize="small" />,
	},
	{
		id: "make-editor",
		name: "Make editor",
		icon: <IconEdit fontSize="small" />,
	},
	{
		id: "make-viewer",
		name: "Make viewer",
		icon: <IconView fontSize="small" />,
	},
	{
		id: "kick",
		name: "Kick from room",
		icon: <IconRemove fontSize="small" />,
	},
];

export default items;
