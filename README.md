# MsgPlus 💬

**MsgPlus** is a modern messaging application built with:

- **Frontend**: [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Express.js](https://expressjs.com/)
- **Real-Time Communication**: [Socket.IO](https://socket.io/)

---

## 🚀 Features

- Responsive chat UI built with Tailwind CSS and Next.js App Router.
- Real-time messaging with WebSocket support via Socket.IO.
- Scrollbar customization and animated typing loader.
- Backend API and WebSocket server powered by Express.js.


## 📂 Project Structure

msgplus/ ├── client/ # Next.js frontend (Tailwind CSS) ├── server/ # Express backend (Socket.IO server)


## 🛠️ Getting Started

### 1. Clone the repository
git clone https://github.com/your-username/msgplus.git
cd msgplus

### 2. Start the Backend Server (Express)
cd server
npm install
npm run dev


### 3. Start the Frontend Server (Next.js)
cd ../client
npm install
npm run dev


⚡ Socket.IO Integration
Socket.IO is used to enable real-time communication between users.

Users can send and receive messages instantly without refreshing.

The backend (server/) handles WebSocket connections and events.

The frontend (client/) listens and emits events through the same connection.

📦 Technologies Used
React with Next.js App Router

Tailwind CSS for styling

Express.js for backend APIs

Socket.IO for real-time messaging

Node.js & npm

✅ Todo / Roadmap
 Authentication

 Message persistence with a database

 Typing indicators

 Chat rooms / group messaging

 📝 License
MIT License — feel free to use and modify for your own projects.