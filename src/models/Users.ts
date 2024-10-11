import { Schema,model } from "mongoose";

const validator = require("validator");


//esquemas para la base de datos, de mi unica coleccion users
interface InterfaceUser{
  name: String;
  password:String;
  email: String;
};
 const SchemaUser = new Schema<InterfaceUser>({
    // no defino Id porque uso _id que ya viene or defecto de mongo DB
  name: {
    type: String,
    maxlength: 100,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 100,                     //Requiere que sea con 8 caracteres minimamente
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
     validate: (value:any) => {
      return validator.isEmail(value);  // cheque si tiene formato de email
    },
    required: [true, "Tu cuenta debe contar con un email"], 
  },
});
export const User = model<InterfaceUser>("User", SchemaUser);
