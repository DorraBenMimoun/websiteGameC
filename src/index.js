import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HighScore from './pages/HighScores/HighScores';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import App from './App';
import Parties from './pages/GameParties/Parties'; 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parties" element={<Parties />} />
                <Route path="/scores" element={<HighScore />} />
                <Route path="/test" element={<App />} />
                <Route path="/Login" element={<LoginSignUp />} />
            </Routes>
        </Router>
    </React.StrictMode>
,
document.getElementById('root')
)