import { Router } from "express";
import { errorHandler } from "../../Middleware/error-handler.middleware.js";
import { getMessagesService, listUserMessages, sendMessageService } from "./services/message.service.js";
import { authenticationMiddleware } from "../../Middleware/authentication.middleware.js";
import { validationMiddleware } from "../../Middleware/validation.middleware.js";
import { sendMessageSchema } from "../../Validators/message.schema.js";

const messageController = Router()


messageController.post('/sendMessage', errorHandler( validationMiddleware(sendMessageSchema) ), errorHandler( sendMessageService ))

messageController.get('/getMessages', errorHandler( getMessagesService ))

messageController.get('/listUserMessages', authenticationMiddleware(), errorHandler( listUserMessages ))



export default messageController