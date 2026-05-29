import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './GameDetail.css';

const GAMES_DETAILS = {
  evoworld: {
    title: 'EVOWORLD.IO',
    image: 'https://pixelvoices.com/media/images/products/evoworld/main.jpg',
    description: 'EvoWorld.io is an evolution-based multiplayer game where you start as a small creature and must grow by eating and avoiding predators. Adapt, evolve, and become the apex predator in this thrilling survival adventure.',
    fullDescription: `EvoWorld.io combines arcade-style gameplay with evolutionary mechanics. 
    
    Features:
    - Multiple playable creatures with unique abilities
    - Multiplayer competition with players worldwide
    - Beautiful pixel art graphics
    - Dynamic ecosystem with prey and predators
    - Unlockable content and progression system
    
    Start small and work your way to the top of the food chain!`,
    platforms: [
      { name: 'Website', url: 'https://evoworld.io/', icon: 'https://pixelvoices.com/media/images/www.png' },
      { name: 'Poki', url: 'https://poki.com/en/g/flyordie-io', icon: 'https://pixelvoices.com/media/images/poki.png' }
    ]
  },
  kingjustice: {
    title: 'KING JUSTICE',
    image: 'https://pixelvoices.com/media/images/products/kingjustice/main.png',
    description: 'King Justice is an action-packed mobile game featuring intense combat, strategic gameplay, and an engaging storyline. Fight for justice and restore peace to the kingdom.',
    fullDescription: `King Justice puts you in the shoes of a powerful warrior tasked with bringing justice to a corrupted kingdom.
    
    Features:
    - Intense hand-to-hand combat
    - Engaging story campaign
    - Customizable characters
    - Multiplayer battle modes
    - Stunning mobile graphics
    - Smooth controls and gameplay
    
    Rise as the King of Justice and restore balance to the realm!`,
    platforms: [
      { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.pixelvoices.kingjustice', icon: 'https://pixelvoices.com/media/images/android_download.png' },
      { name: 'iOS', url: 'https://apps.apple.com/app/king-justice/id1613333523', icon: 'https://pixelvoices.com/media/images/ios_download.png' }
    ]
  },
  zombierunner: {
    title: 'ZOMBIE RUNNER',
    image: 'https://pixelvoices.com/media/images/products/zombierunner/main.png',
    description: 'Zombie Runner is an intense survival game where you must run and escape waves of undead creatures. Quick reflexes and strategic decisions will determine your survival.',
    fullDescription: `Zombie Runner challenges you to survive in a post-apocalyptic world overrun by the undead.
    
    Features:
    - Endless running gameplay
    - Dodge and survive zombie hordes
    - Power-ups and weapons
    - Multiple environments
    - Increasing difficulty levels
    - Compete on global leaderboards
    
    How long can YOU survive the zombie apocalypse?`,
    platforms: [
      { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.pixelvoices.zombierunner', icon: 'https://pixelvoices.com/media/images/android_download.png' }
    ]
  }
};

function GameDetail() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = GAMES_DETAILS[gameId];

  if (!game) {
    return (
      <section className="game-detail">
        <div className="game-not-found">
          <h2>Game Not Found</h2>
          <Link to="/" className="back-button">← Back to Games</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="game-detail">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Games</button>
      
      <div className="game-detail-container">
        <div className="game-detail-image">
          <img src={game.image} alt={game.title} />
        </div>
        
        <div className="game-detail-content">
          <h1>{game.title}</h1>
          <p className="short-description">{game.description}</p>
          
          <div className="full-description">
            {game.fullDescription.split('\n').map((line, index) => (
              line.trim() ? <p key={index}>{line.trim()}</p> : null
            ))}
          </div>
          
          <div className="download-section">
            <h3>Download & Play</h3>
            <div className="platform-links">
              {game.platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-link"
                >
                  <img src={platform.icon} alt={platform.name} />
                  <span>{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameDetail;
