import { Router } from "express";
import { listUsersService, profileService, updatePasswordService, updateProfileService } from "./services/profile.service.js";
import { authenticationMiddleware, authorizationMiddleware, checkRefreshToken } from "../../Middleware/authentication.middleware.js";
import { systemRoles } from "../../Constants/constants.js";
import { errorHandler } from "../../Middleware/error-handler.middleware.js";
import { validationMiddleware } from "../../Middleware/validation.middleware.js";
import { updatePasswordSchema, updateProfileSchema } from "../../Validators/profile.schema.js";

const userController = Router()
const {USER, ADMIN, SUPER_ADMIN} = systemRoles


userController.use(errorHandler( authenticationMiddleware() ))

userController.get('/profile', errorHandler( authorizationMiddleware([USER]) ), errorHandler( profileService ))

userController.patch('/updatePassword', errorHandler( validationMiddleware(updatePasswordSchema) ), errorHandler( checkRefreshToken() ), errorHandler( updatePasswordService ))

userController.put('/updateProfile', errorHandler( validationMiddleware(updateProfileSchema) ), errorHandler( updateProfileService ))

userController.get('/listUsers', errorHandler( authorizationMiddleware([ADMIN]) ), errorHandler( listUsersService ))

export default userController