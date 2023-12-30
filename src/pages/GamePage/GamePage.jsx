// GamePage.js
import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SnackbarProvider, useSnackbar } from 'notistack'
import PlayerList from './PlayerList'
import ActionButtons from './ActionButton'
import { useGameContext } from '../../components/Utils/GameContext'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const GamePage = ({}) => {
  const { joinedGame, setJoinedGame } = useGameContext()
  const { doesGamesChanged, setGamesChanged } = useGameContext()
  const { enqueueSnackbar } = useSnackbar()

  const navigate = useNavigate()

  useEffect(() => {
    if (joinedGame === undefined || joinedGame == null || !joinedGame) {
      navigate('/parties')
    }
    // // Si joinedGame.visitors a augmenté
    // enqueueSnackbar('Un visiteur a rejoint la partie.')
    // // Si mon score a augmenté
    // enqueueSnackbar('Vous avez marquer un point !', { variant: 'success' })
  }, [joinedGame, navigate])

  return (
    <Container>
      {joinedGame && (
        <>
          <Box mt={3}>
            <Typography variant="h4" color={'#0072ff'}>
              Partie de {joinedGame.playerName}
            </Typography>
            {joinedGame.isPlaying ? (
              <Typography variant="h6" color={'green'}>
                Partie en cours
              </Typography>
            ) : (
              <Typography variant="h6" color={'rgb(0 0 0 / 60%)'}>
                Partie non commencée
              </Typography>
            )}
          </Box>
          <div className="flex flex-row gap-2 info-game-container">
            <Box
              display="flex"
              flexGrow={1}
              justifyContent="center"
              alignItems="center"
              height="40vh"
            >
              <ActionButtons />
            </Box>

            {joinedGame && (
              <Box display="flex" justifyContent={'center'} mt={2}>
                <div
                  className="flex flex-col gap-2 visitors-container
 "
                >
                  <h2>
                    <strong>{joinedGame.visitors.length} </strong> visiteur{' '}
                    {joinedGame.visitors.length > 1 && 's'}dans la partie
                  </h2>
                  <PlayerList players={joinedGame.visitors} />
                </div>
              </Box>
            )}
          </div>
        </>
      )}
    </Container>
  )
}

export default GamePage
