const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myDatabase';
const collectionName = 'myCollection';

const client = new MongoClient(url);
async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const document1 = [
            {name: 'Alice', age: 30, city: 'New York'},
            {name: 'Bob', age: 25, city: 'Los Angeles'},
            {name: 'Charlie', age: 35, city: 'Chicago'},
        ];
        const insertResult = await collection.insertMany(document1);
        console.log('Inserted documents:', insertResult.insertedCount);
        console.log('Inserted IDs:', insertResult.insertedIds);
    }
    catch (err) {
        console.error('Error:', err);
    } finally {
        await client.close();
    }
}
main().catch(console.error);