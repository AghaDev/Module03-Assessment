import dotenv from 'dotenv'
import express  from 'express'
import cors from 'cors'
import sequelize from './connection.js'
import Router from './Router.js'


sequelize.sync()
dotenv.config()
 
// initialize express app
const app = express();


app.use(express.json())
app.use(cors())


// routers
app.use('/api',Router)


// port
const PORT = process.env.PORT || 8090;


app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });