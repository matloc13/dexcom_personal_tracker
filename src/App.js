import React, { useEffect, useState,} from 'react'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import { UserProvider } from './contexts/userContext'
import { BASE_URL } from './constants'
import Header from './components/header'
import Main from './components/main'
import Devices from './components/devices'

import Footer from './components/footer'

import './App.css'

 const App = () => {

  const [user, setUser] = useState()
  const [ auth, setAuth] = useState(false)

  useEffect(() => {
    getAccess()
  },[])

  const getAccess = () => {
    fetch(`${BASE_URL}/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true

      }
    })
    .then(res => res.json())
    .then(json =>
      setUser(json.user),
      setAuth(true)
    )
    .catch(err => console.error(err))
  }
console.log(user);
   return (
     <UserProvider value={user}>
       <Router>
         <Header />
         <Switch>
           <Route path={'/welcome'} component={Main}/>
           <Route path={'/devices'} component={Devices}/>
         </Switch>
         <Footer />
       </Router>

     </UserProvider>
   )
}

export default App
