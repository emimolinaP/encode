import { User } from "./models/Users";

//implementaciones de consultas CRUD
const resolvers = { 
  Query: {
    getUsers: async () => {
      const users = await User.find();
      return users;
    },
    getOneUser: async (_:any,{name}:{name:String}) =>{
      const user = await User.findOne({name});
      return user
    }
  },
  Mutation: {
    createUser: async (_:any, {name,password,email}:{name:String,password:String,email:String}) => {
      const newUser = new User({name ,password,email});
      await newUser.save();
      return newUser;
    },    
    destroyUser: async (_:any, {id}:{id:String}) =>{
      await User.findByIdAndDelete(id);
      return "Usuario eliminado";
    },
    updateUser: async (_:any, {id,name,password,email}:{id:String,name:String,password:String,email:String}) => {        
      const userReflesh = await User.findByIdAndUpdate(id,{name:name ,password:password,email:email},{new:true})
      return userReflesh;
    }, 
  }
};

module.exports = { resolvers };
