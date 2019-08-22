import React, { useEffect, useContext,} from 'react'
import { BASE_URL } from '../constants'
import UserContext from '../contexts/userContext'

const Devices = () => {
  const user = useContext(UserContext)
let data = null
// useEffect(() => {
// console.log(user.dexcomId);

//   var xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
//
//   xhr.addEventListener("readystatechange",  function() {
//     if (this.readyState === 4) {
//       console.log(this.responseText);
//     }
//   });
//
//   xhr.open("GET", "https://api.dexcom.com/v2/users/self/devices?startDate=2017-06-16T08:00:00&endDate=2017-06-17T08:00:00");
//   xhr.setRequestHeader("authorization", `Bearer${user.dexcomId}`);
//
//   xhr.send(data);
// },[])

useEffect(() => {
  fetch(`https://api.dexcom.com/v2/users/self/devices?startDate=2018-10-16T08:00:00&endDate=2019-08-17T08:00:00`, {
    method: "GET",
    headers: {
      'authorization': `Bearer ${user.dexcomId}`,
      // 'credentials': 'include',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Credentials': true
    }
  }).then(res => res.json())
  .then(json => console.log(json))
},[])


  return (
    <>

    </>

  )
}

export default Devices;
