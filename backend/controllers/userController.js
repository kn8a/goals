const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

// @desc register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler( async (req,res) => {
    const { name, email, password} = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name, 
        email, 
        password: hashedPass
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler( async (req,res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    //check pass
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler( async (req,res) => {
    res.json({message: 'display user data'})
})

module.exports = {
    registerUser, loginUser, getMe
}