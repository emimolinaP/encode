const mongoose = require("mongoose");
const validator = require("validator");
//esquemas para la base de datos, de mi unica coleccion users
const User = new mongoose.Schema({
    // no defino Id porque uso _id que ya viene or defecto de mongo DB
  name: {
    type: String,
    maxlength: 100,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 100,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
    required: [true, "Tu cuenta debe contar con un email"],
  },
});
module.exports = mongoose.model("User", User);
