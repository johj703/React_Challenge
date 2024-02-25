function Heros({ thumbnail, name }) {
  return (
    <div>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="thumbnail" />
      <h2>{name}</h2>
    </div>
  );
}

export default Heros;
