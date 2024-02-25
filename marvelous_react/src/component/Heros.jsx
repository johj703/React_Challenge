function Heros({ id, thumbnail, name }) {
  return (
    <div>
      <img src={thumbnail} alt="Heros thumbnail" />
      <h2>{name}</h2>
    </div>
  );
}

export default Heros;
