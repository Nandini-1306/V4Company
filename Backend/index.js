const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://V4:Nan%40%261234@v4.lo8j7.mongodb.net/?retryWrites=true&w=majority&appName=V4";
const dbName = 'V4';

async function connectToMongoDB() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Successfully Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

connectToMongoDB();
