const{MongoClient}=require('mongodb');
const uri = 'mongodb://localhost:27017/nodejs'

const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

async function connectToMongo(){
    try{
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('node');
        const collection = database.collection('demo');
        await collection.insertOne({key:'value'});
    }catch(err){
        console.error('Error connecting to MongoDB', err);
    }
}
connectToMongo();