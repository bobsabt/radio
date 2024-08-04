import PropTypes from 'prop-types';

const Top5Box = ({ logo, name, votes}) => {
  return (
    <div className='top5box'>
        <img src={logo} alt="logo"/>
        <p>{name}</p>
        <p>{votes}</p>
    </div>
  )
}

Top5Box.propTypes = {
    logo: PropTypes.string, 
    name: PropTypes.string, 
    votes: PropTypes.number, 
};


export default Top5Box