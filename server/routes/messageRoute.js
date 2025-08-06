import express from 'express'
import { getUserForSidebar, sendMessage, getMessages, markMessageAsSeen} from '../controllers/messageController.js'
import {protectRoute} from '../middlewares/authMiddleware.js'

const messageRouter = express.Router();

messageRouter.get('/users', protectRoute, getUserForSidebar)
messageRouter.get('/:id', protectRoute, getMessages)
messageRouter.put('/mark/:id', protectRoute, markMessageAsSeen)
messageRouter.post('/send/:id', protectRoute, sendMessage)

export default messageRouter