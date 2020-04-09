/**
 * Converts hex to rgb.
 * @param {string} hex hex string; e.g. #f3f3f3
 * @param {boolean} asString should return string instead of object result.
 */
export const rgb = (hex, asString = false) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	const obj = result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
	if (obj && asString) return `${obj.r},${obj.g},${obj.b}`;
	else if (obj) return obj;
	return null;
};
