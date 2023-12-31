import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JoinGameModal from '../../components/JoinGameModal/JoinGameModal'
import { useNavigate } from 'react-router-dom'
import { useGameContext } from '../../components/Utils/GameContext'
import GroupIcon from '@mui/icons-material/Group'
import RestoreIcon from '@mui/icons-material/Restore'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled'
import './Parties.css'

const GameList = () => {
  const { joinedGame, setJoinedGame } = useGameContext()
  const { doesGamesChanged, setGamesChanged } = useGameContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (joinedGame) {
      navigate('/game')
      // console.log(joinedGame)
    }
  }, [joinedGame, navigate])

  const [games, setGames] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedGame, setSelectedGame] = useState({})

  // Fonction pour récupérer les parties depuis le serveur
  const fetchGames = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/games/`
      )
      setGames(response.data)
    } catch (error) {
      console.error('Erreur lors de la récupération des parties:', error)
    } finally {
      setGamesChanged(false)
    }
  }

  useEffect(() => {
    if (doesGamesChanged) fetchGames()
  }, [doesGamesChanged])

  useEffect(() => {
    if (games.length === 0) fetchGames()
  }, [])

  const handleJoinGame = (game) => {
    setSelectedGame(game)
    setOpenModal(true)
  }

  const formatTimeAgo = (createdAt) => {
    const now = new Date()
    const createdDate = new Date(createdAt)
    const diffInSeconds = Math.floor((now - createdDate) / 1000)

    if (diffInSeconds < 60) {
      return `il y a ${diffInSeconds} secondes`
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60)
      return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`
    } else {
      const hours = Math.floor(diffInSeconds / 3600)
      return `il y a ${hours} heure${hours > 1 ? 's' : ''}`
    }
  }

  return (
    <>
      <div className="parties-container container mx-auto sm:w-full my-8">
        <JoinGameModal
          setOpen={setOpenModal}
          open={openModal}
          game={selectedGame}
        />
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white  ml-8">
          Parties en Cours
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          {games.length === 0 ? (
            <p className="text-xl text-white bg-black p-4  ">
              Aucune partie en cours pour le moment.
            </p>
          ) : (
            games.map((game) => (
              <div
                key={game.gameCode}
                className="bg-white p-4 w-3/4 sm:w-full  m-auto flex flex-col sm:flex-row justify-center items-center gap-4 rounded-md shadow-md transition-transform transform  hover:translate-x-5 duration-300 ease-in-out  "
              >
                <h2 className="text-xl font-semibold ">
                  Partie de {game.playerName.toUpperCase()}
                </h2>
                <p>
                  {' '}
                  <GroupIcon /> {game.visitors.length}
                </p>

                {game.isPlaying ? (
                  <>
                    <p className=" text-white  bg-green-600 p-2 rounded-lg">
                      <PlayCircleFilledIcon className=" scale-12 mr-2" />
                      En cours
                    </p>
                  </>
                ) : (
                  <p className="  text-amber-200 bg-slate-500 p-2 rounded-lg">
                    <PauseCircleFilledIcon className=" scale-12 mr-2" />
                    Pas lancée
                  </p>
                )}

                <p color="#">
                  <RestoreIcon className="mr-1" />
                  {formatTimeAgo(game.createdAt)}
                </p>

                <button
                  onClick={() => handleJoinGame(game)}
                  className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                >
                  Rejoindre la Partie
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default GameList
