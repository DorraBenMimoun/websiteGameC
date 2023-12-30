// Importe les éléments nécessaires
import React from 'react'
import { Link } from 'react-router-dom'
import EnemySmall from '../../assets/images/enemy_small.png'
import EnemyBig from '../../assets/images/enemy_big.png'
import EnemyFlying from '../../assets/images/enemy_flying.png'
import EnemyMedium from '../../assets/images/enemy_medium.png'
import './Home.scss'

// Fonction pour la page d'accueil
function Home() {
  return (
    <div className="home-container">
      {/* Navbar (que tu as déjà créée) */}
      {/* ... */}

      {/* Section principale */}
      <section className="main-section">
        <h1>Welcome to Survive4Ever!</h1>
        <p>Download and play the ultimate 2D shooter platformer game.</p>

        {/* Bouton pour télécharger le jeu */}
        <Link to="/download" className="download-button">
          Download Now
        </Link>
      </section>

      {/* Section des parties en cours */}
      <section className="live-games-section">
        <h2>Live Games</h2>
        <p>Join ongoing games and play with others!</p>

        {/* Liste des parties en cours */}
        <ul className="live-games-list">
          {/* Remplace ces liens avec les vrais liens vers les parties en cours */}
          <li>
            <Link to="/join-game">Join Game 1</Link>
          </li>
          <li>
            <Link to="/join-game">Join Game 2</Link>
          </li>
          {/* ... */}
        </ul>
      </section>

      {/* Section à propos des ennemis */}
      <section className="enemies-section">
        <h2>Meet Your Enemies</h2>

        {/* Description des ennemis */}
        <div className="enemy">
          <img src={EnemySmall} alt="Coq" />
          <p>The Furious Rooster</p>
        </div>

        <div className="enemy">
          <img src={EnemyMedium} alt="Lapin Rose" />
          <p>The Pink Bunny</p>
        </div>

        <div className="enemy">
          <img src={EnemyBig} alt="Rhinocéros" />
          <p>The Rampaging Rhino</p>
        </div>

        <div className="enemy">
          <img src={EnemyFlying} alt="Chauve-souris" />
          <p>The Bat of Darkness</p>
        </div>
      </section>
    </div>
  )
}

export default Home
