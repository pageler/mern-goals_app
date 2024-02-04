// Manages the route endpoints for the goalControllers functions:
const express = require("express");
const router = express.Router();
const {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, createGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
