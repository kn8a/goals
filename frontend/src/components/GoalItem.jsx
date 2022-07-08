import { useDispatch } from 'react-redux'
import { delGoal } from '../features/goals/goalSlice'

function GoalItem({goal}) {

    const dispatch = useDispatch()


  return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button className="close" onClick={() => dispatch(delGoal(goal._id))}>x</button>
    </div>
  )
}

export default GoalItem