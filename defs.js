const { gql } = require("apollo-server-express");

// Definiciones de consultas CRUD
const typeDefs = gql`
    type User{
        id: ID          
        name: String
        password: String
        email: String
    }
    type Query{
        getOneUser(name:String):User
        getUsers:[User]
    }
    type Mutation{
        createUser(id:ID,name:String,password:String,email:String):User
        destroyUser(id:ID!):String
        updateUser(id:ID!,name:String,password:String,email:String):User
    }
`;

module.exports = {typeDefs}