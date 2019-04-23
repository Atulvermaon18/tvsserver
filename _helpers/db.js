const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin1:admin1@ds137404.mlab.com:37404/sample_chatbot';
// const dev_db_url = 'mongodb://localhost:27017/admin'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("Database : " + db.name + " Connected!!!")
