# Pixel Voices - React Portfolio

A React-based portfolio website for Pixel Voices game development studio.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Game Showcase**: Display your game portfolio with detailed game pages
- **React Router**: Client-side routing for smooth navigation
- **Contact Integration**: Easy email contact functionality
- **Modern Styling**: Retro-themed pixel art design

## Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## Project Structure

```
pixel-voices/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── GameCard.js
│   │   ├── GameCard.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── GameDetail.js
│   │   └── GameDetail.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Pages

- **Home (`/`)**: Main page showcasing all games
- **Game Detail (`/game/:gameId`)**: Detailed information for each game
  - `evoworld`: EvoWorld.io
  - `kingjustice`: King Justice
  - `zombierunner`: Zombie Runner

## Games Included

1. **EVOWORLD.IO** - An evolution-based multiplayer game
2. **KING JUSTICE** - An action-packed mobile game
3. **ZOMBIE RUNNER** - A survival game with endless running

## Technologies Used

- React 18.2
- React Router DOM 6.14
- CSS3 with responsive design
- Modern JavaScript (ES6+)

## Customization

To add more games, edit the `GAMES_DATA` array in `src/pages/Home.js` and add corresponding entries to `GAMES_DETAILS` in `src/pages/GameDetail.js`.

## License

Pixel Voices is a registered trademark.
