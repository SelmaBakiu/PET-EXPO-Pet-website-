const mongoose = require('mongoose');   // Import mongoose

const connectDB = async () => {
    try{
        
        const conn = await mongoose.connect("mongodb://localhost:27017/");
        console.log(`MongoDB Connected: ${conn.connection.host}, ${conn.connection.port}, ${conn.connection.name}`);
    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;  // Export connectDB function