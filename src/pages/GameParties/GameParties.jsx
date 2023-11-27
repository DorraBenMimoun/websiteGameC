import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';

const GameList = () => {
  const [joinGame, setJoinGame] = useState({
    gameId: '',
    playerName: '',
    password: '',
  });

  const handleJoinGameChange = (e) => {
    const { name, value } = e.target;
    setJoinGame((prev) => ({ ...prev, [name]: value }));
  };

  const handleJoinGame = (gameId) => {
    // Ajoute ici la logique pour rejoindre la partie avec les données de joinGame
    console.log(`Rejoindre la partie ${gameId} en tant que ${joinGame.playerName}`);
  };

  // Exemple de données de parties en cours
  const games = [
    { id: '1', creator: 'Alice', playersCount: 3, map: 'Nuketown', mode: 'Team Deathmatch' },
    { id: '2', creator: 'Bob', playersCount: 2, map: 'Dust II', mode: 'Capture the Flag' },
    { id: '3', creator: 'Charlie', playersCount: 4, map: 'Overwatch', mode: 'Free for All' },
  ];

  return (
    <>       
     <Navbar />

    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Parties en Cours</h1>

    <div className='flex-col gap-4 flex '>

      {games.map((game) => (
        <div key={game.id} className="bg-white p-4 flex justify-center items-center gap-8 rounded-md shadow-md transition-transform transform  hover:translate-x-5 duration-300 ease-in-out">
          <h2 className="text-xl font-semibold ">Partie de {game.creator}</h2>
          <p>Joueurs dans la partie : {game.playersCount}</p>
          <p>Carte : {game.map}</p>
          <p>Mode : {game.mode}</p>
          <button
            onClick={() => handleJoinGame(game.id)}
            className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Rejoindre la Partie
          </button>

          {/* Formulaire pour rejoindre la partie */}
          {game.id === joinGame.gameId && (
            <div className="mt-4">
              <input
                type="text"
                name="playerName"
                placeholder="Pseudo"
                value={joinGame.playerName}
                onChange={handleJoinGameChange}
                className="border border-gray-400 p-2 mr-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Mot de Passe"
                value={joinGame.password}
                onChange={handleJoinGameChange}
                className="border border-gray-400 p-2 mr-2"
              />
              <button
                onClick={() => handleJoinGame(game.id)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300 ease-in-out"
              >
                Rejoindre
              </button>
            </div>
          )}
        </div>
      ))}
          </div>

    </div>
    </>

  );
};

export default GameList;
