import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Heroes({ id, thumbnail, name }) {
  return (
    <div>
      <img src={thumbnail} alt="Heroes thumbnail" />
      <Link to={`/heroes/${id}`}>{name}</Link>
    </div>
  );
}

Heroes.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Heroes;
