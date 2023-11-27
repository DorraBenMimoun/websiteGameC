import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { initializeSocket, getSocket, disconnectSocket } from "./socket"



function App() {
  const [playerName, setPlayerName] = useState('');
  const [gameJoined, setGameJoined] = useState(false);
  const [players, setPlayers] = useState({});
  let socket = null;

  useEffect(() => {

      initializeSocket();

      socket = getSocket() // Obtenir le socket

      function onSocketConnect() {
        console.log('Socket connected')
      }

      function onDisconnect() {
        console.log('Socket disconnected');
      }

      socket.on('connect', onSocketConnect)
      socket.on('disconnect', onDisconnect)

      socket.on('player-joined', ({ id, name }) => {
        setPlayers((prevPlayers) => ({ ...prevPlayers, [id]: name }));
      });
  
      socket.on('player-left', ({ id, name }) => {
        setPlayers((prevPlayers) => {
          const updatedPlayers = { ...prevPlayers };
          delete updatedPlayers[id];
          return updatedPlayers;
        });
      });

      return () => {
        socket.off('connect', onSocketConnect)
        socket.off('disconnect', onDisconnect)
      }
    } 
  , [])


  const joinGame = () => {
    socket = getSocket();
    if (playerName.trim() !== '') {
      console.log('Envoi de la requête "join-game"');
      socket.emit('join-game', playerName); // Utilisez "socket" ici
    }
  };


  const ping = async () => {
    console.log("Test");

    try {
      const response = await axios.get('http://localhost:3001/ping'); // Remplacez l'URL par l'URL de votre serveur
      console.log('Ping Response:', response.data);
    } catch (error) {
      console.error('Erreur de ping:', error);
    }
  };

  return (
    <div className="App">
      {gameJoined ? (
        <div>
          <h1>Partie en cours</h1>
          <p>Nom du joueur : {playerName}</p>
          <h2>Joueurs :</h2>
          <ul>
            {Object.entries(players).map(([id, name]) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1>Rejoindre la partie</h1>
          <input
            type="text"
            placeholder="Votre pseudo"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={joinGame}>Rejoindre la partie</button>
          <button onClick={ping}>Ping</button>
        </div>
      )}
    </div>
  );
}

export default App;
