import React from 'react'
import { Link } from 'react-router-dom'

import Profile from './profile'

const Nav = () => {
  return (
    <nav>
      <Profile/>
      <div>
        <Link to={"/devices"}>devices</Link>
          </div>
    </nav>
  )
}

export default Nav
