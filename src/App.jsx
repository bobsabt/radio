import React, { useEffect, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import Navbar from './Components/Navbar';
import './App.css';



function App() {

  const [stations, setStations] = useState([]);


  const api = new RadioBrowserApi('My Radio App');
  useEffect(() => {
    const fetchStations = async () => {
      try{
      const result = await api.searchStations({
        limit: 30
      });
      setStations(result);
      console.log(result)
      }catch(error){
        console.log(error)
      }
     
    };

    fetchStations();
  }, []);
  
   

  return (
    <div className="radio-app">    
        <Navbar />

    </div>
  );
}

export default App;