//schema initialization 
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017'; // Replace with your MongoDB //URI

// Database and Collection Names
const dbName = 'nodeDB-multi';
const collectionName = 'persons';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected successfully to MongoDB');

        // Access the database
        const db = client.db(dbName);

        // Access the collection
        const collection = db.collection(collectionName);

        // Clear the collection before inserting to avoid duplicate _id errors
        await collection.deleteMany({});

        // Array of documents to insert
        const documents = [
            { _id: 101, id: 101, name: 'Sridhar', age: 25, city: 'Bengaluru' },
            { _id: 102, id: 102, name: 'Suhash', age: 26, city: 'Hosadurga' },
            { _id: 103, id: 103, name: 'Sushanth', age: 27, city: 'Mysuru' },
        ];
        // Insert multiple documents
        const insertResult = await collection.insertMany(documents);
        console.log('Documents inserted:', insertResult.insertedCount);
        // Log inserted document IDs
        console.log('Inserted document IDs:', insertResult.insertedIds);
        const insertCount = await collection.countDocuments();
        console.log('no.of documents inserted', insertCount);

        await collection.createIndex({ id: 1 }, { unique: true });
        await collection.createIndex({ name: 1 });
        await collection.createIndex({ age: 1 });
        await collection.createIndex({ city: 1 });
       } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        // Ensure the client will close when you finish/error
        await client.close();
    }
}
main().catch(console.error);