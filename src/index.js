import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import HighScore from './pages/HighScores/HighScores'
import App from './App'
import Parties from './pages/GameParties/GameParties'
import GradientComponent from './components/Utils/GradientComponent'
import GamePage from './pages/GamePage/GamePage'
import { GameProvider } from './components/Utils/GameContext'
import Navbar from './components/navbar/navbar'
import BottomBar from './components/BottomBar/BottomBar'
import { SnackbarProvider } from 'notistack'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    {/* <React.StrictMode> */}
    <GameProvider>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <GradientComponent />
        <Router>
          <Navbar />
          <App />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parties" element={<Parties />} />
            <Route path="/scores" element={<HighScore />} />
            <Route path="/game" element={<GamePage />}></Route>
          </Routes>
          <Footer />
          <BottomBar />
        </Router>
      </SnackbarProvider>
    </GameProvider>
    {/* </React.StrictMode> */}
  </>
)
