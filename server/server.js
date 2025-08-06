import express from 'express'
import "dotenv/config"
import cors from 'cors'
import http from 'http'
import { connectDB } from './lib/db.js'
import userRouter from './routes/userRoute.js'
import messageRouter from './routes/messageRoute.js'
import { Server } from "socket.io"

//Create Express App and HTTP Server
const app = express()
const server = http.createServer(app)

//Initialize socket.io server
export const io = new Server(server, {
    cors: {origin: "*"}
})

//Store online users
export const userSocketMap = {} // {userId: socketId}

// Socket.io connection handler
io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId
    console.log("User connected", userId)
    if (userId) {
        userSocketMap[userId] = socket.id
    }
    // Emit online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap))
    
    socket.on('disconnect', () => {
        console.log("User disconnected", userId)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})


//Middleware Setup
app.use(express.json({limit: '4mb'}))
app.use(cors())

//Connect to MongoDB
await connectDB()

//Routes Setup
app.use('/api/status', (req, res) => res.send('Server is live'))
app.use('/api/auth', userRouter)
app.use('/api/messages', messageRouter)

const port = process.env.PORT || 7000
server.listen(port, () => console.log(`Server is running on port ${port}`))
