import React, {useContext,} from 'react'
import UserContext from '../contexts/userContext'

const Profile = () => {

const user = useContext(UserContext)


return (
  <>
    Welcome {user.username}


  </>
)
}

export default Profile;
