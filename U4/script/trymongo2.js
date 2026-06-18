const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/';

const dbname = 'mydb';
const collectionName = 'users';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbname);
        const collection = db.collection(collectionName);
        const insertResult = await collection.insertOne({ name: 'Alice', age: 25 });
        console.log('Inserted document:', insertResult.insertedId);
        const findResult = await collection.findOne({ name: 'Alice' });
        console.log('Found document:', findResult);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
