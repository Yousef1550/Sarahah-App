import nodemailer from 'nodemailer'
import event from 'node:events'
import { EventEmitter } from 'node:events'


export const sendEmailService = async ({to, subject, html, attachments = [] } = {}) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',  // smtp.gmail.com || localhost
            port: 465,
            secure: true,
            auth:{
                user: process.env.EMAIL_USER,       // account criedentials that the email will be sent from
                pass: process.env.EMAIL_PASS
            }
        })


        const info = await transporter.sendMail({
            from: `'NO-REPLY 🤐'  <${process.env.EMAIL_USER}>`,     // sender email
            to,
            subject,
            html,
            attachments
        })

        return info 

    } catch (error) {
        console.log(error);
        return error
    }
}


//  if the email was not critical, send it as event to run in the background

export const emitter = new EventEmitter

emitter.on('sendEmail', (...args) => {      // arguments stored as an array in args = [ {} ]
    const {to, subject, html, attachments} = args[0]
    sendEmailService({
                to,
                subject,
                html,
                attachments
            })  
})