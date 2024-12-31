from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import List
import json

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "WebSocket server is running"}
    
# List to store connected WebSocket clients
clients: List[WebSocket] = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    # Accept the connection
    await websocket.accept()

    # Send a message when a user connects
    username = await websocket.receive_text()  # Receive username from the client
    print(f"User {username} connected")

    # Add the new client to the list
    clients.append(websocket)

    try:
        # Listen for incoming messages from this user
        while True:
            data = await websocket.receive_text()  # Receive message
            message_data = json.loads(data)

            # Broadcast the message to all connected clients
            for client in clients:
                if client != websocket:  # Don't send the message back to the sender
                    await client.send_text(json.dumps(message_data))

    except WebSocketDisconnect:
        # Remove the client from the list when they disconnect
        clients.remove(websocket)
        print(f"User {username} disconnected")

