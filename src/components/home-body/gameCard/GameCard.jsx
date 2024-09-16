import { useState } from 'react';
import './GameCard.css'

function GameCard({ game }){
  const [isExpanded, setIsExpanded] = useState(false)
  const maxCharacters = 150;

  function toggleReadMore () {
    setIsExpanded(!isExpanded)
  }

  const truncatdDescription = game.short_description.length > maxCharacters ? game.short_description.slice(0, maxCharacters) + "...": game.short_description;

  return (
    <div className={`game-card-style ${isExpanded ? 'expanded' : ''}`}>
    <div className="img-container">
      <img
          src={game.thumbnail}
          alt={game.title}
          onClick={() => window.open(game.game_url)}
      />
    </div>
    <div className="game-card-content">
      <div className="card-title">
        <h2 onClick={() => window.open(game.game_url)}>
            {game.title}
        </h2>
      </div>

        <div className="game-card-description">
          <p>{isExpanded? game.short_description : truncatdDescription}</p>
          {game.short_description.length>maxCharacters && (
            <button onClick={toggleReadMore} className='read-more-btn'>
              {isExpanded? "Read less": "Read more"}
            </button>
          )}
        </div>
        <div className='info-wrapper'>
        <div className='genre-platform-wrapper'>
          <div className="game-card-genre">
            <p>{game.genre}</p>
          </div>
          <div className="game-card-genre">
            <p>-</p>
          </div>
          <div className="game-card-genre">
            <p>{game.platform}</p>
          </div>
        </div>
        <div className="game-card-genre">
          <p>Release: {game.release_date}</p>
        </div>
      </div>
    </div>
</div>

  );
};

export default GameCard;
