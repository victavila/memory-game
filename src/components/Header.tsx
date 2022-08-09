const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Memory Card Game</h1>
      <div className="score">
        <div className="current-score">Score: </div>
        <div className="best-score">Best Score: </div>
      </div>
    </div>
  )
}

export default Header;