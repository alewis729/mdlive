const express = require("express");
const router = express.Router();

// @route   POST api/groups
// @desc
// @access
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		res.send(req.body);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ id: 1, msg: "Server error." });
	}
});

module.exports = router;
