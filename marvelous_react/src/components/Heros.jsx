import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Heros({ id, thumbnail, name }) {
  return (
    <div>
      <img src={thumbnail} alt="Heros thumbnail" />
      <Link to={`/heros/${id}`}>{name}</Link>
    </div>
  );
}

Heros.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Heros;
