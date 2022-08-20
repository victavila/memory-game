import '../styles/Header.css';

interface HeaderProps {
  score: number;
  bestScore: number;
}

const Header = ({ score, bestScore}: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="title">Memory Card Game</h1>
      <div className="score">
        <div className="current-score">Score: {score}</div>
        <div className="best-score">Best Score: {bestScore}</div>
      </div>
    </div>
  )
}

export default Header;