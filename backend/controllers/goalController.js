const asyncHandler = require('express-async-handler')

// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({
        message: 'Get goals'
    })
})

// @desc set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async(req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add text field') //uses default express error handling and returns html, changed by errorMiddleware
    }
    
    res.status(200).json({
        message: 'Set goals'
    })
})

// @desc edit goal
// @route PUT /api/goals
// @access Private
const editGoal = asyncHandler(async(req,res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
})

// @desc delete goal
// @route DEL /api/goals
// @access Private
const delGoal = asyncHandler(async(req,res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
})

module.exports = {
    getGoals, setGoal, editGoal, delGoal
}