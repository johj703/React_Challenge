import PropTypes from "prop-types";

function Heros({ id, thumbnail, name }) {
  return (
    <div>
      <img src={thumbnail} alt="Heros thumbnail" />
      <h2>{name}</h2>
    </div>
  );
}

Heros.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Heros;
