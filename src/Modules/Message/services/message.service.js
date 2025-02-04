import Message from "../../../DB/models/messages.model.js"
import User from "../../../DB/models/users.model.js"




//    authentication middleware  عشان يبعت رسالة فمش هستخدم  login مش لازم اليوزر يكون عامل 

export const sendMessageService = async (req, res) => {
    const {content, receiverId} = req.body

    // check if the message receiver exists
    const receiver = await User.findById(receiverId)
    if(!receiver){
        return res.status(404).json({message: 'Message receiver not found'})
    }
    // send the message
    const message = await Message.create({content, receiverId})
    return res.status(201).json({message: 'Message sent successfully', data: message})
}


export const getMessagesService = async (req, res) => {
    const messages = await Message.find().populate(         // array of objects, each object for a specific relation
    [
        {
            path: 'receiverId',     // ref
            select: '-password -__v'
        }
    ]
)
    return res.status(200).json({message: 'Success', data: messages})
}


export const listUserMessages = async (req, res) => {
    const {_id} = req.authUser

    const user = await User.findById(_id)
    if(!user){
        return res.status(404).json({message: 'User not found'})
    }

    const messages = await Message.find({receiverId: _id})
    if(!messages){
        return res.status(404).json({message: 'No messages found'})
    }
    return res.status(200).json({message: 'Success', data: messages})
}