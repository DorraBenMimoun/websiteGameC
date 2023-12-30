// PlayerList.js
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const PlayerList = ({ players }) => {
  return (
    <List>
      {players.map((player) => (
        <ListItem key={player.socketId}>
          <ListItemText
            title={player.username}
            primary={player.username}
            secondary={
              <>
                {' '}
                Score : <span style={{ color: '#ffd145' }}>{player.score}</span>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}

export default PlayerList
