const MongoClient = require('mongodb').MongoClient;
require('dotenv').config({ path: '../../../.env' })

async function main() {
    const uri = process.env.DATABASE_URL;
    let client = new MongoClient(uri);

    try {
        await client.connect();
        console.log(`Connected to MongoDB`);
        return { ok: true };
    } catch (e) {
        console.error(e);
        return {
            "body": { "error": "Could not connected to MongoDB" },
            "statusCode": 400
        };
    } finally {
        await client.close();
    }
}

module.exports.main = main;
