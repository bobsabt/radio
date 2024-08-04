import Top5Box from './Top5Box'
import '../top5.css';
import { PropTypes } from 'prop-types';

const Top5 = ( { top5Station } ) => {
    console.log(top5Station)
  return (
    <div>
        <h2>Top5</h2>
        {top5Station && top5Station.map(station => {
            <Top5Box 
                logo={station.favicon} 
                name={station.name}
                votes={station.votes}
            />})
        } 
    </div>
  )
}

Top5.propTypes = {
    top5Station: PropTypes.array
}

export default Top5