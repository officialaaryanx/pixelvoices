import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import './App.css';

const routerBasename = process.env.PUBLIC_URL
  ? new URL(process.env.PUBLIC_URL, window.location.origin).pathname.replace(/\/$/, '')
  : '';

function App() {
  return (
    <Router basename={routerBasename}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:gameId" element={<GameDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
