import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HighScore from './pages/HighScores/HighScores';
import App from './App';
import Parties from './pages/GameParties/GameParties'; 
import AddEnemies from './pages/AddEnemies/addEnemies';

  
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <>
    <React.StrictMode>
        <App />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parties" element={<Parties />} />
                <Route path="/scores" element={<HighScore />} />
                <Route path="/addEnemies/:gameCode/:playerName" element={<AddEnemies/>}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
    </>
)