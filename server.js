const express = require("express");
const connectDB = require("./config/db");
const app = express();

// connect databases
connectDB();

// init middlewares
app.use(express.json({ extended: false }));

// define routes
app.use("/api/groups", require("./routes/groups"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("---------- ---------- ---------- ---------- ----------");
	console.log(`🚀 Server ready on port ${PORT}`);
});
