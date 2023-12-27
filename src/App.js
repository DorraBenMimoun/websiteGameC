import React, { useState, useEffect } from 'react';
import './App.css';

import { initializeSocket, getSocket } from "./socket"



function App() {

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
  
      socket.on('test-message', ({message }) => {
          console.log("message reçu = "+ message)
      });
  
  
      return () => {
        socket.off('connect', onSocketConnect)
        socket.off('disconnect', onDisconnect)
      }
    } 
  , []);






  return (<></> );
}

export default App;
