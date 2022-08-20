import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import uniqid from "uniqid";

const jikanjs  = require('jikanjs');

const App = () => {  
  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [characters, setCharacters] = useState<{name: string, image: string, id: string}[]>([]);

  const [names, setNames] = useState<string[]>([]);

  const fetchCharacters = async () => {
    const response = await jikanjs.loadAnime(11061, 'characters_staff');
    const characters = await response.characters.filter((character: { mal_id: number; name: string; }) => character.mal_id < 5000 || character.name === "Netero, Isaac");
    characters.forEach((character: { name: string; image_url: string; }) => {
      setCharacters((prevArr) => [...prevArr, {name: character.name.split(", ")[1], image: character.image_url, id: uniqid()}])
    });
  };

  const shuffleArray = () => {
    let array = [...characters]

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    setCharacters(array);
  }

  const updateScores = (name: string) => {
    if (names.includes(name)) {
      setNames([]);
      setScore(0);
    } else {
      setNames(prevArray => [...prevArray, name]);
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      };
    }
  }

  const onCardClick = (name: string) => () => {
    shuffleArray();
    updateScores(name);
  }

  useEffect(() => {
    fetchCharacters();
  }, [])

  
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Game characters={characters} onCardClick={onCardClick}/>
    </div>
  );
}

export default App;
