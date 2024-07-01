const mongoose = require('mongoose')

mongoose.connection.on('open', ()=>console.log('conectaos'))


async function connectDb (){
    const uri = 'mongodb+srv://gelvez:luna1005@cluster0.jvctzsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    mongoose.connect(uri)
}

module.exports = connectDb