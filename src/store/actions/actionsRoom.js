import { UPDATE_CONTENT } from "../types";

export const updatePreviewerContent = content => dispatch => {
	dispatch({ type: UPDATE_CONTENT, payload: content });
};
