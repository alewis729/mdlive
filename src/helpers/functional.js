/**
 * Function that modifies the `href` of an `<a>` with a specific id to
 * download a new file.
 * @param {string} text content to save
 * @param {tring} name file name
 */
export const downloadFile = (text, name = "md-live-draft") => {
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
