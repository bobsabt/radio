import Top5Box from './Top5Box'
import '../top5.css';
import { PropTypes } from 'prop-types';

const Top5 = ( { top5Station } ) => {
 console.log(top5Station)
  return (
    <div className='top5-container'>
        <h2>Top5</h2>
        <div className='top5box-wrapper'>
        {top5Station.map((station, place) =>  
            <Top5Box 
                place={place+1}
                key={station.id}
                logo={station.favicon} 
                name={station.name.length > 25 ? 
                    station.name.substring(0,20) + "..." : station.name} 
                votes={station.votes}
            />)
        } 

        </div>
    </div>
  )
}

Top5.propTypes = {
    top5Station: PropTypes.array
}

export default Top5