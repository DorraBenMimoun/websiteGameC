import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { initializeSocket, getSocket, disconnectSocket } from "../../socket"
import axios from 'axios';
import './Parties.css';
import AddEnemies from '../AddEnemies/addEnemies';
import { useNavigate } from "react-router-dom";

const PartiesList = () => {
    const [playerName, setPlayerName] = useState('');
    const [gameCode, setGameCode] = useState('');
    const [gameJoined, setGameJoined] = useState(false);
    const [games, setGames] = useState({});
    const [players, setPlayers] = useState({});
    const [error, setError] = useState('');
    const [error2, setError2] = useState('');

    const navigate = useNavigate(); // Utilisez useNavigate pour obtenir la fonction de navigation

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
                const response = await axios.get('http://localhost:3001/game/code');
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
            console.log('bay')
            const codeExists = games.some((game) => game === gameCode);

            if (codeExists) {
                console.log('Envoi de la requête "join-game"');
                socket.emit('join-game', playerName, gameCode);
                navigate(`/addEnemies/${gameCode}/${playerName}`); // Utilisez la fonction de navigation
                setError('')
                setError2('')
                //ici je veut rederiger vers add enemy et lui envoyer le nom et le code du game
            } else {
                console.log('hello')
                setError(`Game with code ${gameCode} not found`);
                setError2('')
            }
        }
        else {
            setError2(`Please complete the following`);
            setError('')
        }
    };

    return (
        <div className="Partie">
            <Navbar />


            <br />
            <br />

            <div className="form">
                <h1 style={{ fontWeight: 'bold' }}>Rejoindre la partie</h1>
                <form className="login-form">
                    <input type="text" placeholder="name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                    <input type="text" placeholder="Code Game" value={gameCode} onChange={(e) => setGameCode(e.target.value)} />
                </form>
                <button onClick={joinGame}>Rejoindre la partie</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {error2 && <p style={{ color: "red" }}>{error2}</p>}

            </div>


        </div>

    );
}
export default PartiesList;