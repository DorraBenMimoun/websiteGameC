import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/navbar';

const GameList = () => {

  const [games, setGames] = useState([]);

  
  useEffect(() => {
    // Fonction pour récupérer les parties depuis le serveur
    const fetchGames = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/games/`);
        setGames(response.data); // Met à jour l'état avec les données récupérées
      } catch (error) {
        console.error('Erreur lors de la récupération des parties:', error);
      }
    };

    // Appel de la fonction pour récupérer les parties au montage du composant
    fetchGames();
  }, []); // Le tableau vide en second argument assure que le code s'exécute une seule fois au montage


  const handleJoinGame = (gameId) => {
    console.log(`Rejoindre la partie ${gameId};`);
  };

  
  const formatTimeAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdDate) / 1000);

    if (diffInSeconds < 60) {
      return `Créée il y a ${diffInSeconds} secondes`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `Créée il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(diffInSeconds / 3600);
      return `Créée il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    }
  };

  return (
    <>       
     <Navbar />

    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Parties en Cours</h1>

    <div className='flex-col gap-4 flex '>

      {
       games.length === 0 ? (
        <p className="text-xl text-white bg-black p-4  ">Aucune partie en cours pour le moment.</p>
      ) : (
        games.map((game) => (games.map((game) => (
        <div key={game.gameCode} className="bg-white p-4 flex justify-center items-center gap-8 rounded-md shadow-md transition-transform transform  hover:translate-x-5 duration-300 ease-in-out">
          <h2 className="text-xl font-semibold ">Partie de {game.playerName.toUpperCase()}</h2>
          <p>Joueurs dans la partie : {game.visitors.length}</p>
          {/* <p>{game.isPlaying ? (<span>Partie en cours </span>) : (<span>Partie non commencé</span>)}</p> */}
          <p>{formatTimeAgo(game.createdAt)}</p>

          <button
            onClick={() => handleJoinGame(game.gameCode)}
            className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Rejoindre la Partie
          </button>
        </div>
      )))))
    }
          </div>

    </div>
    </>

  );
};

export default GameList;
