import express from 'express'
import { config } from 'dotenv'
config()  // identify the existance of .env file in the root directory ( week11-mongoose-sarahahApp )
import { database_conncection } from './DB/connection.js'
import routerHandler from './utils/router-handler.utils.js'



// config({path: })





const bootstrap = async () => {

    const app = express()

    app.use(express.json())

    await database_conncection()
    
    routerHandler(app)

    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server is running on port ${port}!`);
    })
}


export default bootstrap