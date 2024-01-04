// Importe les éléments nécessaires
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EnemySmall from '../../assets/images/enemy_small.png'
import InstallImage from '../../assets/images/installation.png'
import ScreenShot1 from '../../assets/images/screenshot1.PNG'
import ScreenShot2 from '../../assets/images/screenshot2.PNG'
import ScreenShot3 from '../../assets/images/screenshot3.PNG'
import ImageCode from '../../assets/images/getCode.png'
import ImageParties from '../../assets/images/parties.PNG'
import ImageSpawnEnemis from '../../assets/images/spawnEnemis.PNG'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Paper,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  Gamepad as GamepadIcon,
  Keyboard as KeyboardIcon,
  Save as SaveIcon,
  Code as CodeIcon,
} from '@mui/icons-material'
import EnemyBig from '../../assets/images/enemy_big.png'
import EnemyFlying from '../../assets/images/enemy_flying.png'
import EnemyMedium from '../../assets/images/enemy_medium.png'
// import GameScreenshot1 from '../../assets/images/game_screenshot_1.png';
// import GameScreenshot2 from '../../assets/images/game_screenshot_2.png';
import './Home.scss'

// Fonction pour la page d'accueil
function Home() {
  const [expandedPanel, setExpandedPanel] = useState(null)

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null)
  }

  return (
    <div className="home-container">
      {/* Section principale */}
      <section className="main-section">
        <h1>Bienvenue sur Survive4Ever!</h1>
        <p>Téléchargez et jouez au meilleur jeu de plateforme de tir en 2D.</p>

        {/* Bouton pour télécharger le jeu */}
        <a
          href="https://github.com/Mondherlol/GameC/releases/download/game/Survive4Ever.V2.0.Installer.exe"
          className="download-button"
          target="_blank"
          rel="noreferrer"
        >
          Télécharger
        </a>
      </section>

      {/* Section Screenshots */}
      <section className="screenshots-section">
        <h2>Captures d'écran du jeu</h2>
        <div className="screenshots-container">
          <div className="screenshot">
            <img src={ScreenShot3} alt="Screenshot 2" />
          </div>
          <div className="screenshot">
            <img src={ScreenShot1} alt="Screenshot 1" />
          </div>
        </div>
      </section>

      {/* Section à propos des ennemis */}
      <section className="enemies-section">
        <h2>Découvrez vos ennemis</h2>

        {/* Description des ennemis */}
        <div className="enemy">
          <img src={EnemySmall} alt="Coq" />
          <p>Le Furax Rooster</p>
        </div>

        <div className="enemy">
          <img src={EnemyMedium} alt="Lapin Rose" />
          <p>Le Pinky Jumper</p>
        </div>

        <div className="enemy">
          <img src={EnemyBig} alt="Rhinocéros" />
          <p>Le Rampaging Rhino</p>
        </div>

        <div className="enemy">
          <img src={EnemyFlying} alt="Chauve-souris" />
          <p>La Bat of Darkness</p>
        </div>
      </section>

      {/* Section comment jouer */}

      <section className="gameplay-section mt-8">
        <h2>Comment jouer ?</h2>
        <p>Suivez ces quelques étapes simples.</p>
      </section>
      {/* Section sur le gameplay en tant que joueur */}
      <section className="player-gameplay-section mt-0">
        <h2>En tant que Joueur</h2>
        <p>Embarquez dans votre aventure avec ces étapes simples.</p>

        <div className="gameplay-steps">
          <div className="gameplay-step">
            <a
              href="https://github.com/Mondherlol/GameC/releases/download/game/Survive4Ever.V2.0.Installer.exe"
              className="download-button mb-4"
              target="_blank"
              rel="noreferrer"
            >
              Survive4Ever V1.0
            </a>
            <h3>Téléchargez le jeu</h3>
            <p>Téléchargez la dernière version du jeu. </p>
          </div>
          <div className="arrow">&#8594;</div>

          <div className="gameplay-step">
            <img src={InstallImage} alt="Follow Installation Steps" />
            <h3>Suivez les étapes d'installation</h3>
            <p>Suivez les étapes pour installer le jeu sur votre appareil.</p>
          </div>

          <div className="arrow">&#8594;</div>

          <div className="gameplay-step">
            <img src={ScreenShot1} alt="Launch the Game" />
            <h3>Lancez le jeu</h3>
            <p>Démarrez le jeu et amusez-vous !</p>
          </div>
        </div>
      </section>

      {/* Section sur le gameplay en tant qu'ami du joueur */}
      <section className="friend-gameplay-section">
        <h2>En tant qu'Invité</h2>
        <p>Rejoignez la partie de votre ami en deux cliques !</p>

        <div className="gameplay-steps">
          <div className="gameplay-step">
            <img src={ImageParties} alt="Open the Site" />
            <h3>
              Rendez-vous sur l'onglet{' '}
              <Link to="parties" style={{ color: '#f1c40f' }}>
                Parties
              </Link>
            </h3>
            <p>Et cliquez sur "Rejoindre" sur la partie de votre ami.</p>
          </div>

          <div className="arrow">&#8594;</div>

          <div className="gameplay-step">
            <img src={ImageCode} alt="Join an Ongoing Game" />
            <h3>Entrez le code de la partie</h3>
            <p>
              Regardez l'écran de votre ami pour voir le code à entrer.
              N'oubliez pas de choisir un pseudo !
            </p>
          </div>

          <div className="arrow">&#8594;</div>

          <div className="gameplay-step">
            <img src={ImageSpawnEnemis} alt="Select Enemies" />
            <h3>Sélectionnez les ennemis</h3>
            <p>
              Choisissez les ennemis à faire apparaître sur l'écran de votre
              ami. Rejoinez l'action et gagnez des points !
            </p>
          </div>
        </div>
      </section>

      {/* Section about the game with details box */}
      <section className="game-details-section max-w-lg">
        <h2 className="text-white center text-lg mt-8 mb-4">A propos du jeu</h2>
        <Paper elevation={3} className="details-container">
          {/* Detail 1 */}
          <Accordion
            expanded={expandedPanel === 'panel1'}
            onChange={handlePanelChange('panel1')}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <GamepadIcon />
              <Typography>Compatible avec manette et clavier</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="details">
                <Typography>
                  Le jeu est entièrement jouable avec une manette ! Il faut
                  cependant se munir d'un clavier pour changer son pseudo
                  in-game.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Detail 2 */}
          <Accordion
            expanded={expandedPanel === 'panel2'}
            onChange={handlePanelChange('panel2')}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <KeyboardIcon />
              <Typography>Comment changer les touches ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="details">
                <Typography>
                  Pour changer les touches (au claiver) de votre jeu vous avez à
                  disposition un fichier config.ini dans le dossier du jeu.
                  Ouvrez le avec votre bloc-note habituel et changez les valeurs
                  comme cela vous convient !
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Detail 3 */}
          <Accordion
            expanded={expandedPanel === 'panel3'}
            onChange={handlePanelChange('panel3')}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SaveIcon />
              <Typography>Comment est sauvegardé mon score ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="details">
                <Typography color={'black'}>
                  Votre score est sauvegarder localement, et en ligne si vous
                  êtes connectez, automtiquement à chaque fin de partie. Vous
                  n'avez rien besoin de faire en particulier, simplement
                  autoriser la connexion à Internet lors du premier lancement.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          {/* Detail 4 */}
          <Accordion
            expanded={expandedPanel === 'panel4'}
            onChange={handlePanelChange('panel4')}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <CodeIcon />
              <Typography>Comment a été développé ce jeu ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="details">
                <Typography color={'black'}>
                  Ce jeu a été conçu dans le cadre d'un projet de programmation
                  C. Il est donc quasi intégralement programmé en C, avec
                  exception pour la partie websocket qui est gérée par un
                  programme Python local. Vous trouverez le github dans le
                  footer.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </section>
    </div>
  )
}

export default Home
