const{MongoClient}=require('mongodb');

const uri = 'mongodb://localhost:27017/nodejs'

const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

async function deleteCollection() {
    try{
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('node');
        const collection = database.collection('demo2');

        await collection.drop();
        console.log('Collection deleted successfully');

    }catch(err){
        console.error('Error fetching data from MongoDB',err);
    }finally{
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

deleteCollection();