import React, { useState } from 'react';
import './HighScores.scss';
import Navbar from '../../components/navbar/navbar';

const HighScore = () => {
  const [activeTab, setActiveTab] = useState('players');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const players = [
    { name: 'Alice', score: 120, crown: true },
    { name: 'Bob', score: 100, crown: false },
    // ... autres joueurs
  ];

  const killers = [
    { name: 'Charlie', kills: 30, crown: true },
    { name: 'David', kills: 25, crown: false },
    // ... autres tueurs
  ];

  return (
    <>
    <Navbar/>
  
    <div className="high-score">
        <h1 className='mt-5 text-white  text-2xl'>High Score :</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'players' ? 'active' : ''}`}
          onClick={() => handleTabChange('players')}
        >
          Joueurs
        </button>
        <button
          className={`tab ${activeTab === 'killers' ? 'active' : ''}`}
          onClick={() => handleTabChange('killers')}
        >
          Tueurs
        </button>
      </div>

      <div className="score-list">
        {activeTab === 'players' && (
          <ul>
            {players.map((player, index) => (
              <li key={index} className={`score-item ${player.crown ? 'crowned' : ''}`}>
                <span> {player.name} {player.crown && <>👑</> } </span>
                <span>{player.score} points</span>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'killers' && (
          <ul>
            {killers.map((killer, index) => (
              <li key={index} className={`score-item ${killer.crown ? 'crowned' : ''}`}>
                <span> {killer.name} {killer.crown && <>👑</> }</span>
                <span>{killer.kills} kills</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  );
};

export default HighScore;
