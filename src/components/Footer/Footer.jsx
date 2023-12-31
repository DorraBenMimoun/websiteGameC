import React from 'react'
import {
  Typography,
  Link,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import './Footer.scss'

const Footer = () => {
  return (
    <BottomNavigation className="footer">
      <BottomNavigationAction
        label="GitHub"
        icon={<GitHubIcon />}
        component={Link}
        href="https://github.com/votre-utilisateur/survive4ever"
        target="_blank"
        rel="noopener noreferrer"
      />
      <div className="game-info">
        <Typography variant="body2" color="textSecondary">
          {`© ${new Date().getFullYear()} Survive4ever`}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`2023-2024`}
        </Typography>
      </div>
    </BottomNavigation>
  )
}

export default Footer
