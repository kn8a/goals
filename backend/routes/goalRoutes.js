const express = require('express')
const router = express.Router()
const { getGoals, setGoal, editGoal, delGoal } = require('../controllers/goalController')

router.get('/', getGoals)

router.post('/', setGoal)

router.put('/:id', editGoal)

router.delete('/:id', delGoal)

module.exports = router