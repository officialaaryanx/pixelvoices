import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import './Home.css';

const GAMES_DATA = [
  {
    id: 'evoworld',
    title: 'EVOWORLD.IO',
    image: 'https://pixelvoices.com/media/images/products/evoworld/main.jpg',
    description: 'An evolution-based multiplayer game where you grow and adapt to survive.',
    links: [
      {
        label: 'Website',
        url: 'https://evoworld.io/',
        icon: 'https://pixelvoices.com/media/images/www.png'
      },
      {
        label: 'Poki',
        url: 'https://poki.com/en/g/flyordie-io',
        icon: 'https://pixelvoices.com/media/images/poki.png'
      }
    ]
  },
  {
    id: 'kingjustice',
    title: 'KING JUSTICE',
    image: 'https://pixelvoices.com/media/images/products/kingjustice/main.png',
    description: 'An action-packed mobile game where you fight for justice.',
    links: [
      {
        label: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.pixelvoices.kingjustice',
        icon: 'https://pixelvoices.com/media/images/android_download.png'
      },
      {
        label: 'iOS',
        url: 'https://apps.apple.com/app/king-justice/id1613333523',
        icon: 'https://pixelvoices.com/media/images/ios_download.png'
      }
    ]
  },
  {
    id: 'zombierunner',
    title: 'ZOMBIE RUNNER',
    image: 'https://pixelvoices.com/media/images/products/zombierunner/main.png',
    description: 'Run, survive, and escape the zombie apocalypse!',
    links: [
      {
        label: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.pixelvoices.zombierunner',
        icon: 'https://pixelvoices.com/media/images/android_download.png'
      }
    ]
  }
];

const FEATURED_GAME = GAMES_DATA[0];

function Home() {
  const [heroOffset, setHeroOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleHeroMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

    setHeroOffset({
      x: relativeX * 10,
      y: relativeY * 8
    });
  };

  const resetHeroMotion = () => setHeroOffset({ x: 0, y: 0 });

  return (
    <>
      <section
        className="hero-showcase scroll-reveal"
        onMouseMove={handleHeroMove}
        onMouseLeave={resetHeroMotion}
      >
        <div className="hero-copy">
          <p className="eyebrow">Featured Release</p>
          <h1>{FEATURED_GAME.title}</h1>
          <p className="hero-description">{FEATURED_GAME.description}</p>

          <div className="hero-stats" aria-label="featured game stats">
            <div className="stat-pill">Playable Web</div>
            <div className="stat-pill">Global Multiplayer</div>
            <div className="stat-pill">Live Studio Focus</div>
          </div>

          <div className="hero-actions">
            <a className="primary-cta" href="https://evoworld.io/" target="_blank" rel="noopener noreferrer">
              Play Now
            </a>
            <Link className="secondary-cta" to={`/game/${FEATURED_GAME.id}`}>
              View Details
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="featured game artwork">
          <div
            className="hero-art-frame"
            style={{
              '--hero-offset-x': `${heroOffset.x}px`,
              '--hero-offset-y': `${heroOffset.y}px`
            }}
          >
            <div className="hero-art-visual">
              <img src={FEATURED_GAME.image} alt={FEATURED_GAME.title} />
            </div>
          </div>
          <div className="hero-badge">Top Pick</div>
        </div>
      </section>

      <section className="games-section">
        <h2 className="section-title scroll-reveal">GAMES</h2>
        <div className="games-grid scroll-reveal">
          {GAMES_DATA.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} className="scroll-reveal" />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
