const { MongoClient, ObjectId } = require('mongodb');

process.env.MONGODB_URI = 'mongodb://kkbbg1:IObRfl8SoyDOZZu5OdDFc3Nmjz9KqPjlKEzK6HTRPhdkVcNHocHItfRq5iJHkknMNvdCIP8tKiv5ACDbxYpq4w==@kkbbg1.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@kkbbg1@';

if (!process.env.MONGODB_URI) {
    // throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    process.env.MONGODB_URI = 'mongodb://localhost:27017';
}

// Connect to MongoDB
async function connectToDB() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('bookingsDB');
    db.client = client;
    return db;
}

module.exports = { connectToDB, ObjectId };