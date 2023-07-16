

import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'
function PageNotFound() {
  return (
    <div className='pageNotFound my-4'>
          <h1 className=''>Ooops..... Page Not Found !!</h1>
          <Link className='thankYouAnch' to='/signup'>Click To SignUp</Link>
    </div>
  )
}

export default PageNotFound
