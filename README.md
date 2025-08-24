<h1>MERN Chat App (Socket.IO)</h1>

<p>
A real-time chat application built with the <strong>MERN</strong> stack (MongoDB, Express, React, Node.js) and 
<strong>Socket.IO</strong>.  
Supports real-time messaging, authentication, multiple chat rooms, and persistent storage of messages.
</p>

<h2>🚀 Features</h2>
<ul>
  <li>💬 Real-time messaging with <code>Socket.IO</code></li>
  <li>👤 User authentication & registration</li>
  <li>📨 Private chats</li>
  <li>🗂️ Persistent chat history (MongoDB)</li>
  <li>🔔 Online/offline status</li>
  <li>⚡ REST API + WebSocket integration</li>
  <li>🎨 React frontend with context/state management</li>
</ul>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React, React Router, Axios, Socket.IO client</li>
  <li><strong>Backend:</strong> Node.js, Express.js, Socket.IO</li>
  <li><strong>Database:</strong> MongoDB / MongoDB Atlas</li>
  <li><strong>Authentication:</strong> JWT, bcrypt</li>
</ul>

<h2>📂 Project Structure</h2>
<pre>
mern-chat-app/
│
├── backend/            # Express + Node.js API
│   ├── server.js       # Includes Socket.IO setup
│   ├── routes/
│   ├── models/
│   └── controllers/
│
├── frontend/           # React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── socket.js   # Socket.IO client setup
│   └── package.json
│
└── README.md
</pre>

<h2>⚙️ Installation</h2>
<pre>
# Clone the repo
git clone https://github.com/BhavyaB19/mern-chat.git
cd mern-chat-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
</pre>

<h2>🔑 Environment Variables</h2>
<p>Create a <code>.env</code> file inside <code>backend/</code>:</p>
<pre>
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
</pre>

<h2>▶️ Running the App</h2>
<pre>
# Backend (Express + Socket.IO)
cd backend
npm run dev   # Runs on http://localhost:5000

# Frontend (React)
cd frontend
npm start     # Runs on http://localhost:3000
</pre>

<h2>🛡️ API Routes</h2>
<table>
  <tr>
    <th>Method</th><th>Endpoint</th><th>Description</th><th>Auth</th>
  </tr>
  <tr>
    <td>POST</td><td>/api/auth/register</td><td>Register new user</td><td>No</td>
  </tr>
  <tr>
    <td>POST</td><td>/api/auth/login</td><td>Login user</td><td>No</td>
  </tr>
  <tr>
    <td>GET</td><td>/api/users</td><td>List all users</td><td>Yes (JWT)</td>
  </tr>
  <tr>
    <td>GET</td><td>/api/messages/:chatId</td><td>Get chat history</td><td>Yes (JWT)</td>
  </tr>
</table>
