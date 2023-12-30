import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.css'

import { initializeSocket, getSocket } from './socket'
import { useGameContext } from './components/Utils/GameContext'

function App() {
  const navigate = useNavigate()

  const { joinedGame, setJoinedGame } = useGameContext()
  const { doesGamesChanged, setGamesChanged } = useGameContext()
  const [lastUpdatedGame, setLastUpdatedGame] = useState(null)

  let socket = null

  useEffect(() => {
    initializeSocket()
    socket = getSocket() // Obtenir le socket
    function onSocketConnect() {
      console.log('Socket connected')
    }

    function onDisconnect() {
      console.log('Socket disconnected')
      navigate('/parties')
      setJoinedGame(null)
    }

    socket.on('connect', onSocketConnect)
    socket.on('disconnect', onDisconnect)

    socket.on('test-message', ({ message }) => {
      console.log('message reçu = ' + message)
    })

    socket.on('joined-game-success', (game) => {
      console.log('Vous avez rejoint la partie de ' + game.playerName)
      setJoinedGame(game)
      navigate('/game')
    })

    socket.on('closed-game', () => {
      console.log('Partie terminée')
      navigate('/parties')
      setJoinedGame(null)
    })

    socket.on('new-game-created', () => {
      console.log('Une nouvelle partie a été créée')
      setGamesChanged(true)
    })
    socket.on('game-was-removed', () => {
      console.log("Une partie n'est plus en ligne")
      setGamesChanged(true)
    })

    socket.on('game-changed', (game) => {
      console.log(`La partie de ${game.playerName} a changé`)
      setGamesChanged(true)
      setLastUpdatedGame(game)
    })
    return () => {
      socket.off('connect', onSocketConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  // Mettre à jour les infos si c'est la partie rejointe
  useEffect(() => {
    if (
      lastUpdatedGame &&
      joinedGame &&
      lastUpdatedGame.gameCode == joinedGame.gameCode
    ) {
      setJoinedGame(lastUpdatedGame)
    }
  }, [lastUpdatedGame, setLastUpdatedGame])

  return <></>
}

export default App
