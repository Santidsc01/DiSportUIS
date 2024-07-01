require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, db }=require('./config')


const port = process.env.APP_PORT

connectDb(db)
app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`));
