import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//rfce snippet:

// import React from 'react'

// function Dashbooard() {
//   return (
//     <div>Dashbooard</div>
//   )
// }

// export default Dashbooard

import React, { useEffect } from 'react'

function Dashbooard() {
  
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        
    }, [user, navigate])

    return (
    <div>Dashbooard</div>
  )
}

export default Dashbooard