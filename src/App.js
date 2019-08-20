import React, { useEffect, useState,} from 'react'
import './App.css'

 const App = () => {

   const [user, setUser] = useState(username: 'matloc')




   return (
     <UserProvider value={user}>
       <Header />
       <Footer />
     </UserProvider>
   )
}

export default App
