const User = require("./models/Users");

//implementaciones de consultas CRUD
const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find();
      return users;
    },
    getOneUser: async (_,args) =>{
      const user = await User.findOne(args);
      return user
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      const { id, name, password, email } = args;
      const newUser = new User({ id, name, password, email });
      await newUser.save();
      return newUser;
    },
    destroyUser: async (_, args) => {
      await User.findByIdAndDelete(args.id);
      return "Usuario eliminado";
    },
    updateUser: async (_, args) => {
        const {name,password,email} = args;
        const userReflesh = await User.findByIdAndUpdate(args.id,{name,password,email},{new:true})
        return userReflesh;
    },
  },
};

module.exports = { resolvers };
