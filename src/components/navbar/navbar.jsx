import { Link, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import AdbIcon from '@mui/icons-material/Adb'
import './navbar.scss'
import logo from '../../assets/images/logo.png' // Tell webpack this JS file uses this image

const Navbar = () => {
  const location = useLocation()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img className="mr-2" src={logo} width={140} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
          <Typography
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <img className="mr-2" src={logo} width={130} alt="logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-start',
              margin: 'auto',
            }}
          >
            <Link
              to={'/'}
              sx={{ my: 2, color: 'white', display: 'block' }}
              className={`link text-white hover:text-gray-300 ${
                location.pathname === '/' ? 'selected' : ''
              }`}
            >
              Accueil
            </Link>
            <Link
              sx={{ my: 2, color: 'white', display: 'block' }}
              to={'/parties'}
              className={`link text-white hover:text-gray-300 ${
                location.pathname === '/parties' ? 'selected' : ''
              }`}
            >
              Parties
            </Link>
            <Link
              sx={{ my: 2, color: 'white', display: 'block' }}
              to={'/scores'}
              className={`link text-white hover:text-gray-300 ${
                location.pathname === '/scores' ? 'selected' : ''
              }`}
            >
              Meilleurs scores
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

  // return (
  //   <nav className="bg-gray-800 p-4">
  //     <div className="container mx-auto flex items-center justify-between">
  //       <div className="text-white font-bold text-xl">GAME C</div>
  //       <div className="flex space-x-4">
  //         <Link to={"/"} className="text-white hover:text-gray-300">Accueil</Link>
  //         <Link to={"/parties"} className="text-white hover:text-gray-300">Parties</Link>
  //         <Link to={"/scores"} className="text-white hover:text-gray-300">Meilleurs scores</Link>

  //       </div>
  //     </div>
  //   </nav>
  // );
}

export default Navbar
