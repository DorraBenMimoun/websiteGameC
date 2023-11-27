import { io } from 'socket.io-client'


let socket = null

export const initializeSocket = () => {

    socket = io("http://localhost:3001/")
  
}

export const getSocket = () => {
  if (!socket) {
    throw new Error("Socket not initialized. Call 'initializeSocket' first.")
  }

  return socket
}

export const disconnectSocket = () => {
  if (socket) socket.disconnect()
}
