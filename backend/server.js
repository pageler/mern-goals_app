const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const colors = require("@colors/colors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Middleware for goalController POST body.text.

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); // Calls the express errorHandler middleware function.

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`.blue));
