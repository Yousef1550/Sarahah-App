import { globalErrorHandler } from "../Middleware/error-handler.middleware.js"
import authController from "../Modules/Auth/auth.controller.js"
import messageController from "../Modules/Message/message.controller.js"
import userController from "../Modules/User/user.controller.js"






const routerHandler = (app) => {
    app.use('/auth', authController)
    app.use('/user', userController)
    app.use('/message', messageController)



    // error handling middleware, starts with err
    app.use(globalErrorHandler)
}


export default routerHandler
