interface CardProperties {
  name: string,
  image: string,
  onCardClick: () => void;
}

const Card = ({ name, image, onCardClick}: CardProperties) => {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={image} alt={name}></img>
      <h3 className="character-name">{name}</h3>
    </div>
  )
}

export default Card;