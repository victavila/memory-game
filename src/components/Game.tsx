import Card from './Card';
import '../styles/Game.css';

interface GameProps {
  characters: {name: string, image: string, id: string}[],
  onCardClick: (name: string) => () => void; 
}

const Game = ({ characters, onCardClick }: GameProps) => {
  return (
    <div className="cards">
      {characters.map((character: {name: string, image: string, id: string}) => (
        <Card 
        key = {character.id}
        name = {character.name}
        image = {character.image}
        onCardClick = {onCardClick(character.name)} 
        />
      ))}
    </div>
  )
}

export default Game;