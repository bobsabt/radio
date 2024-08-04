import { useEffect, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import Navbar from './Components/Navbar';
import './App.css';
import Top5 from './Components/Top5';



function App() {

  const [stations, setStations] = useState([]);
  const [top5Station, setTop5Station] = useState([]);


  const api = new RadioBrowserApi('My Radio App');
  useEffect(() => {
    const fetchStations = async () => {
      try{
      const result = await api.searchStations({
        limit: 30
      });
      setStations(result);
      
      }catch(error){
        console.log(error)
      }
     
    };
    const fetchTop5 = async () => {
      try{
      const result = await api.searchStations({
        by:'topvote',
        limit: 5
      });
      setTop5Station(result);
     
      }catch(error){
        console.log(error)
      }
     
    };

    fetchStations();
    fetchTop5();
  }, []);
  
   

  return (
    <div className="radio-app">    
        <Navbar />
        <Top5 top5Station={top5Station} />
    </div>
  );
}

export default App;