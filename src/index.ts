const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./defs");
const mongoose = require("mongoose");

const app = express();
module.exports = app;

//conexion con la db
mongoose
  .connect(
    "mongodb+srv://emimolinap8:VRWDP4P9FsCC4EZB@cluster0.b2rth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      serverSelectionTimeoutMS: 0,
    }
  )
  .then((con:any) => {
    console.log("Conectado a la DB");
  });
//



//funcion principal(levanta server)
async function run() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers});

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => console.log("Server escuchando en el puerto", 3000));
}

run();
