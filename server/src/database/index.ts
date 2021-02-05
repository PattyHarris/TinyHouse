import { MongoClient } from "mongodb";

const user = 'tinyhouse-admin';
const userPassword = 'z4AvF7VHVTE30oiP';
const cluster = 'cluster0.arncm';

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/main?retryWrites=true&w=majority`

export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
     });

     const db = client.db('main');

     return {
         listings: db.collection('test_listings')
     };
};