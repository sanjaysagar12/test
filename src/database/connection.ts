import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://root:password@localhost:27017';
const client = new MongoClient(uri);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    return client.db(); // Returns the database instance
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}
