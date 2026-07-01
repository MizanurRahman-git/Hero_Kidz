const uri = process.env.MONGO_URI;
const dbName = process.env.DBNAME;

export const collections = {
  PRODUCTS: "products",
};
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cname) => {
  return client.db(dbName).collection(cname);
};
