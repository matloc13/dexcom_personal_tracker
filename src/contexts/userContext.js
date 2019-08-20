import React, {createContext,} from 'react'

const UserContext = createContext({})

export const UserProvider = UserContext.Provider
export const UserCononsumer = UserContext.Consumer

export default UserContext
