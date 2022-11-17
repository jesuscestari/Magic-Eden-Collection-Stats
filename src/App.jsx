import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 
    const getScore = async () => {

      const symbol = document.getElementById("symbolValue").value;
      let symbolcoll = symbol.replaceAll(' ', '_');
      console.log(symbolcoll)
      
        const response = await fetch(`https://api-mainnet.magiceden.dev/v2/collections/${symbolcoll}/stats`)
        
    
     const body = await response.json();
     const bodytext = JSON.stringify(body);
      console.log(bodytext)

      const floorPrice = body.floorPrice;

      const listed = body.listedCount;

      const volume = body.volumeAll;

      document.getElementById('floorText').innerHTML = `Floor Price: ${floorPrice} SOL`;
      document.getElementById('listedText').innerHTML = `Total listed: ${listed}`;
      document.getElementById('totalVolumeText').innerHTML = `Total Volume: ${volume}`;

       
    };
    
  
  
  return (
    <div className="App">
      <div>
        
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        
        
      </div>
      <h1>Magic Eden Collection Stats</h1>
      <input id='symbolValue' className="tex" type="text" placeholder='Collection name' name="symbol"/>
      
        
        <button onClick={getScore}>Find stats
        </button>
        <h3 id='floorText'>  </h3>
        <h3 id='totalVolumeText'>  </h3>
        <h3 id='listedText'>  </h3>
     
      
    </div>
  )
}

export default App
