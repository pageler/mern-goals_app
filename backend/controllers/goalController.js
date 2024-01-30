// Controllers folder holds CRUD functions:
const asyncHandler = require("express-async-handler"); // Await response from DB.
const Goal = require("../models/goalModel"); // goalSchema for MongoDB

// @description: Read goals
// @route: GET /api/goals
// @access: Private with authentication
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
});

// @description: Create goal
// @route: POST /api/goal
// @access: Private with authentication
const createGoal = asyncHandler(async (req, res) => {
    console.log(req.body); // Using Postman POST body.text with `urlencoded` middleware:
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field."); // Express error handler.
    }

    const goal = await Goal.create({
        text: req.body.text,
    });

    res.status(200).json(goal);
});

// @description: Update goal
// @route: PUT /api/goal/id
// @access: Private with authentication
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found.");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedGoal);
});

// @description: Delete goals
// @route: DELETE /api/goals/id
// @access: Private with authentication
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error("Goal not found.");
    }

    await goal.deleteOne();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
};
