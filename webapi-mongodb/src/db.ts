import { Db, MongoClient } from "mongodb";

let singleton: Db;

export default async (): Promise<Db> => {
    if (singleton) return singleton;

    const client = new MongoClient(`${process.env.MONGO_HOST}`);

    await client.connect();

    singleton = client.db(process.env.MONGO_DATABASE);

    return singleton;
}