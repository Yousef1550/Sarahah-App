import Joi from "joi";




export const sendMessageSchema = {
    body: Joi.object({
        content: Joi.string().max(500),
        receiverId: Joi.string().hex().length(24)
    })
    .options({presence: 'required'})  
}