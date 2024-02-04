const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getData,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser); // Add user and call controller function.
router.post("/login", loginUser); // Add login and call controller function.
router.get("/data", protect, getData); // Add me and call controller function.

module.exports = router;
