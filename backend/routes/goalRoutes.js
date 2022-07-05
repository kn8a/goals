const express = require('express')
const router = express.Router()
const { getGoals, setGoal, editGoal, delGoal } = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getGoals)
router.post('/', protect, setGoal)
router.put('/:id', protect, editGoal)
router.delete('/:id', protect, delGoal)


module.exports = router