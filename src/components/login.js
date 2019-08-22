import React, { } from 'react'
import { BASE_URL } from '../constants'
import Button from './button';

const Login = (props) => {

const {user,} = props
const handleLogin =()=> {
  window.open(`${BASE_URL}/auth/dexcom`, '_self')
}

  return (
    <>
      {
        user ?

          <Button
            url={`${BASE_URL}/auth/logout`}
            name={'logout'}
            value={'Logout'}
          />:
        
        <button onClick={handleLogin}>login</button>
        }
    </>
  )
}
export default Login
