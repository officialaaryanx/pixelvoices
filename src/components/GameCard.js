import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

function GameCard({ game, index, className = '' }) {
  return (
    <div className={`game-card ${className}`.trim()} style={{ animationDelay: `${index * 0.14}s` }}>
      <Link to={`/game/${game.id}`} className="game-link">
        <h3 className="game-title">{game.title}</h3>
        <img src={game.image} alt={game.title} />
      </Link>
      <div className="link-icons">
        {game.links.map((link, linkIndex) => (
          <a
            key={linkIndex}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            style={{ animationDelay: `${(index * 0.14) + (linkIndex * 0.08)}s` }}
          >
            <img src={link.icon} alt={link.label} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default GameCard;
