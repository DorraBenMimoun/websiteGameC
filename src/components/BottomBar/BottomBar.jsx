import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BottomBar.scss'

function BottomBar() {
  const location = useLocation()

  return (
    <div className="bottom-bar-container">
      <Link to="/" className="nav-link">
        <i className="bx bxs-home-alt-2"></i>
        <p>Accueil</p>
        <span className={location.pathname === '/' ? 'active' : ''}></span>
      </Link>
      <Link to="/parties" className="nav-link">
        <i className="bx bxs-dice-6"></i>
        <p>Parties</p>
        <span
          className={location.pathname === '/parties' ? 'active' : ''}
        ></span>
      </Link>
      <Link to="/scores" className="nav-link">
        <i className="bx bxs-trophy"></i>
        <p>Scores</p>
        <span
          className={location.pathname === '/scores' ? 'active' : ''}
        ></span>
      </Link>
    </div>
  )
}

export default BottomBar
