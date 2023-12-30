// GameContext.js
import { createContext, useContext, useState } from 'react'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [joinedGame, setJoinedGame] = useState(undefined)
  const [doesGamesChanged, setGamesChanged] = useState(true)

  return (
    <GameContext.Provider
      value={{ joinedGame, setJoinedGame, doesGamesChanged, setGamesChanged }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider')
  }
  return context
}
