const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() 
{
    try {
        await client.connect();
        const db=client.db("mydb");
        const users=db.collection("users");
    await users.insertOne({
        name:"John",
        age:30
    });
    const NAME=await users.findOne({name:"John"});
    console.log(user);
    }
    finally 
    { await client.close(); }
}
main().catch(console.error);

