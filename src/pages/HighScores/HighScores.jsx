import React, { useState, useEffect } from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

import axios from 'axios'

import './HighScores.scss'

const HighScore = () => {
  const [activeTab, setActiveTab] = useState('players')
  const [scores, setScores] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSelection, setCurrentSelection] = useState(null)
  const scoresPerPage = 10
  const [anchorEl, setAnchorEl] = useState(null)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handlePopoverOpen = (event, index) => {
    setAnchorEl(event.currentTarget)
    setCurrentSelection(index)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const indexOfLastScore = currentPage * scoresPerPage
  const indexOfFirstScore = indexOfLastScore - scoresPerPage
  const currentScores = scores.slice(indexOfFirstScore, indexOfLastScore)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/scores`
        )
        setScores(response.data)
      } catch (error) {
        console.error('Erreur lors de la récupération des scores :', error)
      }
    }

    fetchScores()
  }, [])

  const formatTimeAgo = (createdAt) => {
    const now = new Date()
    const createdDate = new Date(createdAt)
    const diffInMilliseconds = now - createdDate
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000)
    const diffInHours = Math.floor(diffInMilliseconds / (60 * 60 * 1000))

    if (diffInHours >= 5) {
      // Si la différence est de plus de 5 heures, affiche la date complète
      const formattedDate = `${createdDate.getDate()}/${
        createdDate.getMonth() + 1
      }/${createdDate.getFullYear()} à ${createdDate.getHours()}:${createdDate.getMinutes()}`
      return `Obtenu le ${formattedDate}.`
    } else {
      // Sinon, affiche la différence en heures
      return `Il y a ${diffInHours}h`
    }
  }

  return (
    <>
      <div className="high-score pt-9">
        <div className="score-list">
          <div className="main">
            <div class="containerTab">
              <div class="tableau">
                <div class="titleTab">
                  <button
                    className={`btnTitle ${
                      activeTab === 'players' ? 'active' : ''
                    }`}
                    onClick={() => handleTabChange('players')}
                  >
                    Joueurs
                  </button>
                  {/* <button
                    className={`btnTitle killer ${
                      activeTab === 'killers' ? 'active' : ''
                    }`}
                    onClick={() => handleTabChange('killers')}
                  >
                    Tueurs
                  </button> */}
                </div>
                {activeTab === 'players' && (
                  <>
                    <div class="nameList">
                      <table>
                        <tbody>
                          {currentScores.map((player, index) => (
                            <tr
                              key={'player score' + index + 1}
                              className={`score-item ${
                                player.crown ? 'crowned' : ''
                              }`}
                              aria-owns={
                                open && currentSelection === index
                                  ? 'mouse-over-popover'
                                  : undefined
                              }
                              aria-haspopup="true"
                              onMouseEnter={(e) => handlePopoverOpen(e, index)}
                              onMouseLeave={handlePopoverClose}
                            >
                              <td>
                                <span class="number-top">
                                  {indexOfFirstScore + index + 1}.
                                </span>
                                <span>
                                  {player.name.charAt(0).toUpperCase() +
                                    player.name.slice(1).toLowerCase()}{' '}
                                  {player.crown && <>👑</>}
                                </span>
                                <Popover
                                  id="mouse-over-popover"
                                  sx={{
                                    pointerEvents: 'none',
                                  }}
                                  open={open && currentSelection === index}
                                  anchorEl={anchorEl}
                                  onClose={handlePopoverClose}
                                  anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                  }}
                                  transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                  }}
                                  disableRestoreFocus
                                >
                                  {' '}
                                  <Typography className=" p-4">
                                    {formatTimeAgo(player.dateTime)}
                                  </Typography>
                                </Popover>
                              </td>
                              <td>
                                <span>
                                  <strong>{player.score}</strong> points
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="pagination">
                      {Array.from(
                        { length: Math.ceil(scores.length / scoresPerPage) },
                        (_, i) => (
                          <button
                            key={i + 1}
                            className={
                              currentPage === i + 1 ? 'page-active' : ''
                            }
                            onClick={() => paginate(i + 1)}
                          >
                            {i + 1}
                          </button>
                        )
                      )}
                    </div>
                  </>
                )}
                {/* Add a similar block for 'killers' tab */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HighScore
