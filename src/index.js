import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import GameParties from './pages/GameParties/GameParties';
import Navbar from './components/navbar/navbar';
import HighScore from './pages/HighScores/HighScores';
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parties" element={<GameParties />} />
                <Route path="/scores" element={<HighScore />} />
            </Routes>
                  </Router>
    </React.StrictMode>
,
document.getElementById('root')
)