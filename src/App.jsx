import React,{ useEffect, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import Navbar from './Components/Navbar';
import './App.css';
import Top5 from './Components/Top5';



function App() {
  const [stations, setStations] = useState([]);
  const [top5Station, setTop5Station] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("app")


  const api = React.useMemo(() => {return new RadioBrowserApi('My Radio App')}, []);
  api.setBaseUrl('https://at1.api.radio-browser.info')

  useEffect(() => {
    const fetchStations = async () => {
        try {
        const data = await api.searchStations({
          by: 'topvote',
          limit: 30
        });
        const tempSortedStations = data.sort((a, b) => b.votes - a.votes);
        console.log(tempSortedStations);
        setTop5Station(tempSortedStations.slice(1, 6));
        setStations(tempSortedStations.slice(6));
      } catch (error) {
        console.error("Error fetching stations:", error);
      } finally {
        setIsLoading(false);
      }
     
    };
    fetchStations();
  }, [api]);


  return (
    <div className="radio-app">    
        <Navbar />
        {isLoading ?
        <h1>Not now</h1>
        :
        <Top5 top5Station={top5Station} />
        }
    </div>
  );
}

export default App;