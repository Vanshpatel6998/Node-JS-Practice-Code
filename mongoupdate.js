const{MongoClient}=require('mongodb');

const uri = 'mongodb://localhost:27017/nodejs'

const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

async function updateCollection() {
    try{
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('node');
        const collection = database.collection('demo');

        const updateResult = await collection.updateOne(
            {name:'Akash'},
            {$set:{age:35}}
        );

        console.log('${updateResult.modifiedCount} document updated');

        const updateMultipleResult = await collection.updateMany(
            {age:{$lt:30}},
            {$set:{status:'Inactive'}}
        );
        console.log('${updateMultipleResult.modifedCount} documents updated');

    }catch(err){
        console.error('Error fetching data from MongoDB',err);
    }finally{
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

updateCollection();