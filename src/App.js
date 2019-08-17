import React, { useEffect, useState,} from 'react';
import './App.css';

function App()

useEffect(() => {
  fetch(`https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=${process.env.CID}&redirect_uri=lvh.me&response_type=code&scope=offline_access&state=`)
},[])
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
