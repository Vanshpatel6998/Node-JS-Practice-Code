const{MongoClient}=require('mongodb');

const uri = 'mongodb://localhost:27017/nodejs'

const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

async function fetchWithCondition() {
    try{
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('node');
        const collection = database.collection('demo');

        const condition = {age:{$lt:29}};

        const documents = await collection.find(condition).toArray();

        console.log('Documents with condition:');
        documents.forEach(doc=>{
            console.log(doc);
        });
    }catch(err){
        console.error('Error fetching data from MongoDB',err);
    }finally{
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

fetchWithCondition();