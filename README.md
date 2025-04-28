# Real-Time Chat Application

A simple real-time chat application built using Python's FastAPI and WebSocket technology. The app allows users to communicate instantly with others in a chat room, sending and receiving messages in real-time without page reloads. It features a responsive front-end built with HTML, CSS, and JavaScript.

## Features

- **Real-time messaging**: Send and receive messages instantly.
- **WebSocket communication**: Built using WebSocket for fast, low-latency communication.
- **User authentication**: Users set a username before entering the chat room.
- **Multi-user support**: All connected users receive messages in real time.
- **Responsive UI**: Designed with HTML, CSS, and JavaScript for a clean, interactive experience across devices.

## Technologies Used

- **Backend**: Python, FastAPI, WebSocket
- **Frontend**: HTML, CSS, JavaScript

## Getting Started

### Prerequisites

- Python 3.x
- pip (Python package installer)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/repo-name.git

2. Navigate to the project directory:
      bash
      cd repo-name

3. Create a virtual environment (optional but recommended):
      bash
      python -m venv venv

4. Activate the virtual environment:

   On Windows:
   bash
   venv\Scripts\activate

   On Mac/Linux:
   bash
   source venv/bin/activate

5. Install the required dependencies:

   pip install -r requirements.txt

6. Running the Application
   
   Start the FastAPI server:
   
   uvicorn main:app --reload

7. Open index.html in your browser to start the chat application.

# WebSocket Chat App
Updated README to trigger GitHub Actions 🚀

#### Directory Structure

.
├── index.html        # Frontend HTML file
├── main.py           # FastAPI WebSocket server code
├── scripts.js        # JavaScript for handling WebSocket communication
├── styles.css        # CSS styling for the chat application
└── requirements.txt  # Python dependencies (FastAPI, uvicorn, etc.)

Dependencies

Create a requirements.txt file with the following contents:
fastapi
uvicorn

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to fork this repository, submit pull requests, or open issues if you encounter bugs or have suggestions for improvement.


