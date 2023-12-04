import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { initializeSocket, getSocket, disconnectSocket } from "../../socket"
import axios from 'axios';
import './Parties.css';

const PartiesList = () => {
    const [playerName, setPlayerName] = useState('');
    const [gameCode, setGameCode] = useState('');

    const [gameJoined, setGameJoined] = useState(false);
    const [games, setGames] = useState({});
    const [players, setPlayers] = useState({});
    const [error, setError] = useState('');


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

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:3001/games/code');
                setGames(response.data);
                console.log('games code ', response.data)
            } catch (error) {
                console.error('Erreur lors de la récupération des codes :', error);
            }
        };

        fetchGames();
    }, []); // Le tableau vide signifie que cela s'exécutera une seule fois au montage

    const joinGame = () => {
        socket = getSocket();
        if (playerName.trim() !== '' && gameCode.trim() !== '') {
            const codeExists = games.some((game) => game === gameCode);
            console.log('code exist', codeExists)

            if (codeExists) {
                console.log('Envoi de la requête "join-game"');
                socket.emit('join-game', playerName, gameCode);
                setError('');
            } else {
                setError(`Game with code ${gameCode} not found`);
            }
        }
    };
    return (
        <div className="Partie">
            <Navbar />
           
         
            <br />
            <br />

            <div className="form">
            <h1 style={{fontWeight:'bold'}}>Rejoindre la partie</h1>
                <form className="login-form">
                    <input type="text" placeholder="name" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                    <input type="text" placeholder="Code Game"   value={gameCode} onChange={(e) => setGameCode(e.target.value)} />
                    <button onClick={joinGame}>Rejoindre la partie</button>
                    {error && <p style={{color:"red"}}>{error}</p>}
                </form>
            </div>


        </div>

    );
}
export default PartiesList;