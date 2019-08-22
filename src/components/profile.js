import React, {useContext,} from 'react'
import UserContext from '../contexts/userContext'
import Login from './login'
const Profile = () => {

const user = useContext(UserContext)


return (
  <>
    {
      user &&
      <h1>Welcome {user.username}</h1>
    }

    <Login
      user={user}
    />
  </>
)
}

export default Profile;
