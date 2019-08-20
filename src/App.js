import React, { useEffect, useState,} from 'react'
import { UserProvider } from './contexts/userContext'
import Header from './components/header'
import Footer from './components/footer'

import './App.css'

 const App = () => {

   const [user, setUser] = useState({username: 'matloc'})




   return (
     <UserProvider value={user}>
       <Header />
       
       <Footer />
     </UserProvider>
   )
}

export default App
