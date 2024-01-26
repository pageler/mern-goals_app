const asyncHandler = require("express-async-handler"); // Await response from DB.

// @description: Read goals
// @route: GET /api/goals
// @access: Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Read goals." });
});

// @description: Create goal
// @route: POST /api/goal
// @access: Private
const createGoal = asyncHandler(async (req, res) => {
    console.log(req.body); // Using Postman POST body.text with `urlencoded` middleware:
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field."); // Express error handler.
    }

    res.status(200).json({ message: "Create goal." });
});

// @description: Update goal
// @route: PUT /api/goal/id
// @access: Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @description: Delete goals
// @route: DELETE /api/goals/id
// @access: Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
};
