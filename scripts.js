let socket;
const usernameInput = document.getElementById("username");
const setUsernameButton = document.getElementById("set-username-button");
const chatContainer = document.getElementById("chat-container");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat-box");

setUsernameButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        socket = new WebSocket("ws://localhost:8000/ws");

        socket.onopen = function() {
            socket.send(username); // Send username as the first message
            chatContainer.style.display = "block"; // Show the chat container
            document.getElementById("username-container").style.display = "none"; // Hide the username input
        };

        socket.onmessage = function(event) {
            const messageData = JSON.parse(event.data);
            const messageElement = createMessageElement(messageData);
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the latest message
        };

        socket.onerror = function(event) {
            console.error("WebSocket error observed:", event);
            alert("Failed to connect to the WebSocket server.");
        };

        socket.onclose = function() {
            console.log("Disconnected from WebSocket server");
        };
    } else {
        alert("Please enter a valid username!");
    }
});

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        const messageData = {
            username: usernameInput.value,
            message: message,
            timestamp: new Date().toLocaleTimeString()
        };
        socket.send(JSON.stringify(messageData));  // Send message to server
        messageInput.value = "";  // Clear the input field
    }
});

function createMessageElement(messageData) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    const usernameElement = document.createElement("span");
    usernameElement.classList.add("username");
    usernameElement.textContent = messageData.username;

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = messageData.message;

    const timestampElement = document.createElement("span");
    timestampElement.classList.add("timestamp");
    timestampElement.textContent = messageData.timestamp;

    messageContainer.appendChild(usernameElement);
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(timestampElement);

    return messageContainer;
}


