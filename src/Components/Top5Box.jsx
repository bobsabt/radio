import PropTypes from "prop-types";

const Top5Box = ({ place, logo, name}) => {
  return (
    <div className="top5box">
        <p className="position">{place}</p>
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
        <p className="station-name">{name}</p>
    </div>
  );
};

Top5Box.propTypes = {
    place: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
 
};

export default Top5Box;
