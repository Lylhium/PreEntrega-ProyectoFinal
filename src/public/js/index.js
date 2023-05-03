const socket = io();

socket.emit("mensaje", "me estoy comunicando desde un websocket");
