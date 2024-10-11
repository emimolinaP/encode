const { gql } = require("apollo-server-express");




// Definiciones de consultas CRUD
export const typeDefs = gql`
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
    """ input AtribUser{
        name:String
        password: String      // tuve problemas para implentarlo con esto
        email: String
    } """
    type Mutation{
        createUser(name:String,password:String,email:String):User
        destroyUser(id:ID!):String
        updateUser(id:ID!,name:String,password:String,email:String):User
    }
`;

module.exports = {typeDefs}