// WebSocketComponent.js
import React, { useEffect } from 'react';

const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');

    socket.addEventListener('open', function (event) {
      socket.send('Hello Server!');
    });

    socket.addEventListener('message', function (event) {
      console.log('Message from server:', event.data);
    });

    socket.addEventListener('error', function (event) {
      console.error('WebSocket error observed:', event);
    });

    socket.addEventListener('close', function (event) {
      if (event.wasClean) {
        console.log('WebSocket connection closed cleanly');
      } else {
        console.error('WebSocket connection died');
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  return <div>WebSocket Connection</div>;
};

export default WebSocketComponent;
