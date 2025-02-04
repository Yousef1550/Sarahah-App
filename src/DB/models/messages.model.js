import mongoose from "mongoose"

// parent => user 
// child => message

/** relations simulation 
 *  parent - child       >>> the user knows his messages but the message doesn't have its owner
 *  child - parent       >>> the message have its owner (receiver) but the user doesn't know his messages
 *  embeded document
 */

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
}, {timestamps: true})


const Message = mongoose.models.Message || mongoose.model('Message', messageSchema)  

export default Message
