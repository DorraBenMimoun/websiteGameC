import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'

const EnemyButton = ({ enemyType, imageSrc, onClick, isBlocked }) => {
  const [isCooldown, setCooldown] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)

  const handleClick = () => {
    if (!isCooldown && !isBlocked) {
      onClick(enemyType)
      setCooldown(true)
      setRemainingTime(5) // Set initial cooldown time to 5 seconds
    }
  }

  useEffect(() => {
    let cooldownInterval

    if (isCooldown) {
      cooldownInterval = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(prevTime - 0.2, 0))
      }, 200)
    }

    return () => {
      clearInterval(cooldownInterval)
    }
  }, [isCooldown])

  useEffect(() => {
    if (remainingTime === 0) {
      setCooldown(false)
    }
  }, [remainingTime])

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      disabled={isCooldown}
      onClick={handleClick}
      className={
        isBlocked
          ? `blocked button-enemy ${isCooldown ? 'button-cooldown' : ''}`
          : `button-enemy ${isCooldown ? 'button-cooldown' : ''} `
      }
      style={{ position: 'relative' }}
    >
      <img
        src={imageSrc}
        alt={`${enemyType} Enemy`}
        width={150}
        height={150}
        style={{ filter: isCooldown ? 'grayscale(100%)' : 'none' }}
      />{' '}
      {isCooldown && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textShadow:
              '-1px 0 0px #000, 0 1px 0px #000, -2px 1px 0px #000, -1px 2px 0px #000, -3px 2px 0px #000, -2px 3px 0px #000, -4px 3px 0px #000, -3px 4px 0px #000, -5px 4px 0px #000, -4px 5px 0px #000, -6px 5px 0px #000, -5px 6px 15px #777',

            fontSize: '20px',
          }}
        >
          {remainingTime.toFixed(1)}
        </div>
      )}
    </Button>
  )
}

export default EnemyButton
