/**
 * Function that modifies the `href` of an `<a>` with a specific id to
 * download a new file.
 * @param {string} text content to save
 * @param {tring} name file name
 */
export const downloadFile = (text, name = "md-live-draft") => {
	if (!document) return null;
	const id = "file-download-a-tag";
	const file = new Blob([text], { type: "text/plain" });
	let element = document.getElementById(id);

	if (!element) {
		element = document.createElement("a");
		element.id = id;
		element.style.display = "none";
	}

	element.href = URL.createObjectURL(file);
	element.download = `${name}.md`;
	document.body.appendChild(element); // Required for this to work in FireFox
	element.click();
};

/**
 * @param {string} domain http://localhost:3000
 * @param {string} path /room/abc-def
 */
export const getFullUrl = (domain, path) => {
	let url = domain + path;
	url = url.substr(url.indexOf("//") + 2);
	return url;
};

/**
 * Function that returns a random string.
 * @param {arr} length [4, 2] => xxxx-xxxx
 * @param {str} chars posible chars to consider
 */
export const getRandomAlphanumeric = (
	length = [4, 2],
	chars = "0123456789abcdefghijklmnopqrstuvwxyz"
) => {
	const randomChar = chars => chars[Math.floor(Math.random() * chars.length)];
	let res = "";

	for (let i = 0; i < length[1]; i++) {
		for (let j = 0; j < length[0]; j++) {
			res += randomChar(chars);
		}
		if (i !== length[1] - 1) res += "-";
	}

	return res;
};

/**
 * Function that gets a random default text to display in .md
 */
export const getRandomTextMd = () => {
	const adjectives = [
		"beautiful",
		"creative",
		"cool",
		"great",
		"nice",
		"intelligent",
		"awesome",
	];
	const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
	const final = `## Hello ${adj} human 😃\n\nJust type here to see a live preview!`;

	return final;
};

/**
 * Function that replaces all spaces from a string.
 */
export const replaceSpaces = (str, replace = "") => {
	if (typeof str !== "string") return str;
	return str.replace(/\s/g, replace);
};

/**
 * Function that replaces all white spaces from a string.
 */
export const replaceWhiteSpaces = (str, replace = "") => {
	if (typeof str !== "string") return str;
	return str.replace(/^\s+|\s+$|\s+(?=\s)/g, replace);
};
