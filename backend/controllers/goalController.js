const asyncHandler = require('express-async-handler')
const { findById } = require('../model/goalModel')

const Goal = require('../model/goalModel')

// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({ user: req.user.id})
    res.status(200).json(goals)
})

// @desc set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async(req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add text field') //uses default express error handling and returns html, changed by errorMiddleware
    }
    
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)
})

// @desc edit goal
// @route PUT /api/goals
// @access Private
const editGoal = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// @desc delete goal
// @route DEL /api/goals
// @access Private
const delGoal = asyncHandler(async(req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals, setGoal, editGoal, delGoal
}