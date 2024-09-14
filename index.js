// import MongoStore from 'connect-mongo';

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

// mongoose.connect(
//     process.env.MONGO_URL,{ 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true }, 
//     () => {
//     console.log("Connected to MongoDB");
// });

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((res) => {
//     console.log("Database connected");
//   })
//   .catch((error) => {
//     console.log(error);
//   });


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://User_1:<db_password>@cluster0.2bwljqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.listen(8800, () => {
  console.log("backend server is running!");
});
