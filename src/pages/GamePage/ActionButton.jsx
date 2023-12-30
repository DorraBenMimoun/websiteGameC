// ActionButtons.js
import React from 'react'
import EnemyButton from './EnemyButton' // Import the new EnemyButton component
import Box from '@mui/material/Box'
import EnemySmall from '../../assets/images/enemy_small.png'
import EnemyBig from '../../assets/images/enemy_big.png'
import EnemyFlying from '../../assets/images/enemy_flying.png'
import EnemyMedium from '../../assets/images/enemy_medium.png'
import { getSocket } from '../../socket'
import { useGameContext } from '../../components/Utils/GameContext'

const ActionButtons = () => {
  const { joinedGame, setJoinedGame } = useGameContext()

  const handleEnemyClick = (enemyType) => {
    console.log(
      `Envoyer l'ennemi ${enemyType} a la partie ${joinedGame.gameCode}`
    )

    const socket = getSocket() // Obtenir le socket
    socket.emit('add-enemy', enemyType, joinedGame.gameCode)
  }

  return (
    <Box className="flex flex-col gap-5 ">
      <div className="flex flex-row gap-5">
        <EnemyButton
          enemyType="2"
          imageSrc={EnemyBig}
          onClick={handleEnemyClick}
          isBlocked={!joinedGame.isPlaying}
        />
        <EnemyButton
          enemyType="1"
          imageSrc={EnemyMedium}
          onClick={handleEnemyClick}
          isBlocked={!joinedGame.isPlaying}
        />
      </div>

      <div className="flex flex-row gap-5">
        <EnemyButton
          enemyType="0"
          imageSrc={EnemySmall}
          onClick={handleEnemyClick}
          isBlocked={!joinedGame.isPlaying}
        />
        <EnemyButton
          enemyType="3"
          imageSrc={EnemyFlying}
          onClick={handleEnemyClick}
          isBlocked={!joinedGame.isPlaying}
        />
      </div>
    </Box>
  )
}

export default ActionButtons
