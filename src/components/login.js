import React, { } from 'react'
import { BASE_URL } from '../constants';

const Login = () => {

  return (
    <>
      <form onSubmit={`${BASE_URL}/auth/dexcom`}>
        <Input
          type={'submit'}
          value={'Login with Dexcom'}
        />
      </form>

    </>
  )
}
export default Login
