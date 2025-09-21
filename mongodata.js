const{MongoClient}=require('mongodb');

const uri = 'mongodb://localhost:27017/nodejs'

const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

async function connectToMongo(){
    try{
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('node');
        const collection = database.collection('demo');

        const singleInsertResult = await collection.insertOne({
            name:'Akash',
            age:30,
            email:'akash@example.com'
        });
        console.log('Inserted ID:',singleInsertResult.insertedId);

        const multipleInsertResult = await collection.insertMany([
            {
                name:'Deepak',
                age:25,
                email:'deepak@example.com'
            },
            {
                name:'Nilesh',
                age:28,
                email:'nilesh@example.com'
            }
        ]);
        console.log('Inserted IDs:',multipleInsertResult.insertedIds);

    }catch(err){
        console.error('Error connecting to MongoDB',err);
    }finally{
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

connectToMongo();