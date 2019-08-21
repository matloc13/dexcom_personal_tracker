import React, { } from 'react'
import { BASE_URL } from '../constants'
import Input from './input';

const Login = () => {

  // const goToLogin = (event) => {
  //   event.preventDefault()
  //   fetch(`${BASE_URL}/auth/dexcom`)
  //   // .then(res => res.json())
  // }

  return (
    <>
      {/* <form onSubmit={goToLogin}>
        <Input
          type={'submit'}
          value={'Login with Dexcom'}
        />
        </form>
      */}
      <a href={`${BASE_URL}/auth/dexcom`}>Login with Dexcom</a>
    </>
  )
}
export default Login
