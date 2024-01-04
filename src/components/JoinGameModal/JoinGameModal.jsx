import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import { alpha, styled } from '@mui/material/styles'
import './JoinGame.scss'
import { getSocket } from '../../socket'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#ffd145',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ffd145',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffd145',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
}

export default function JoinGameModal({ open, setOpen, game }) {
  const [username, setUsername] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  // useEffect(() => {
  //   if (game && game.gameCode) {
  //     setCode(game.gameCode)
  //     setUsername('TEST')
  //   }
  // }, [game, open])

  const handleChangeCode = (e) => {
    const inputCode = e.target.value

    // Vérifier les caractères spéciaux
    const isInvalidCharacter = /[^\w]/.test(inputCode)

    if (!isInvalidCharacter && inputCode.length <= 4) {
      // Mettre à jour le state en majuscules
      setCode(inputCode.toUpperCase())
    }
  }

  const handleChangeUsername = (e) => {
    const inputCode = e.target.value

    // Vérifier les caractères spéciaux
    const isInvalidCharacter = /[^\w]/.test(inputCode)

    if (!isInvalidCharacter && inputCode.length <= 6) {
      // Mettre à jour le state en majuscules
      setUsername(inputCode.toUpperCase())
    }
  }

  const handleClose = () => {
    setOpen(false)
    setUsername('')
    setCode('')
    setError('')
  }

  const handleJoin = (e) => {
    e.preventDefault()
    // Validation du code (ignorer la casse)
    if (code.toLowerCase() === game.gameCode.toLowerCase()) {
      const socket = getSocket()
      socket.emit('join-game', username, game.gameCode)
    } else {
      setError('Code incorrect')
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="connexion">
        <div className="btnClose">
          <button onClick={handleClose}>X</button>
        </div>

        <div className="box login">
          <form>
            <h2>REJOINDRE</h2>
            <p className="partie-infos">la partie de {game.playerName} </p>
            <div className="input-box">
              <CssTextField
                id="username"
                label="Pseudo"
                variant="standard"
                value={username}
                onChange={handleChangeUsername}
                maxLength={5}
              />
              {/* <i className="bx bx-user" style={{ color: '#f1c40f' }}></i> */}
            </div>
            <div className="input-box">
              <CssTextField
                color="error"
                id="code"
                label="Code de la partie"
                variant="standard"
                value={code}
                onChange={handleChangeCode}
                maxLength={4}
              />
              {/* <i className="bx bx-lock-alt"></i> */}
            </div>

            {error && <p className="error-message">{error}</p>}

            {username.length >= 2 && code.length == 4 ? (
              <button type="submit" className="btnLogin" onClick={handleJoin}>
                Rejoindre
              </button>
            ) : (
              <button
                className="btnLogin btnLoginInvalid"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Rejoindre
              </button>
            )}

            <div className="login-register">
              <p>
                Vous ne trouvez pas le code ? <br />
                <strong className="register-link">
                  Regardez l'écran de {game.playerName} !
                </strong>
              </p>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  )
}
