import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { initializeSocket, getSocket, disconnectSocket } from "../../socket"
import axios from 'axios';
import { useParams } from 'react-router-dom';

import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'


const AddEnemies = () => {

    const [selectedEnemy, setSelectedEnemy] = useState(null);
    const [enemies, setEnemies] = useState([]);
    const [selectedSide, setSelectedSide] = useState(null);
    const [error, setError] = useState('');
    const enemyImages = [image1, image2, image3, image4];
    const { gameCode, playerName } = useParams();
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
        return () => {
            socket.off('connect', onSocketConnect)
            socket.off('disconnect', onDisconnect)
        }
    }
        , [])

    const addEnemy = () => {
        socket = getSocket();

        if (selectedEnemy !== null && selectedSide !== null) {    // Envoi du code de l'ennemi au serveur

            const enemyCode = selectedEnemy + 1;
            socket.emit('add-enemy', enemyCode, gameCode, playerName, selectedSide);
            console.log(`Envoi de l'ennemi au serveur avec le code : ${enemyCode}`);
            setError('')

        }
        else {
            // Afficher un message d'erreur ou effectuer une autre action
            setError('Veuillez choisir un ennemi et un side  .');
        }
    };



    return (

        <div className='Enemies'>
            <Navbar />
            <br />
            <br />
            <div style={{}}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Player Name: {playerName}</h1>
                    {/* Choix de l'ennemi */}
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {/* Affichage des images des ennemis */}
                        {enemyImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Enemy ${index + 1}`}
                                style={{
                                    cursor: 'pointer',
                                    width: '80px',
                                    height: '80px',
                                    border: selectedEnemy === index ? '2px solid red' : 'none',
                                }}
                                onClick={() => {
                                    setSelectedEnemy(index);
                                }}
                            />
                        ))}
                    </div>
                    {/* Boutons radio "left" et "right" */}
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="left"
                                checked={selectedSide === 'left'}
                                onChange={() => setSelectedSide('left')}
                            />
                            Left
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="right"
                                checked={selectedSide === 'right'}
                                onChange={() => setSelectedSide('right')}
                            />
                            Right
                        </label>
                    </div>

                    <br />
                    <br />
                    {/* Bouton pour ajouter un ennemi */}
                    <div style={{ textAlign: 'center' }}>
                        <button onClick={addEnemy}>Add Enemy</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}

                    </div>
                </div>


            </div>


        </div>
    )



}
export default AddEnemies;
