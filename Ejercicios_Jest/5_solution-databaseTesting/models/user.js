const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");
const isURL = require("validator/lib/isURL");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: "correo electrónico requerido",
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
        message: "formato de correo no válido",
      },
    },
    password: {
      type: String,
      required: "contraseña requerida",
      select: false,
    },
    name: {
      type: String,
      required: "nombre requerido",
      minlength: 2,
      maxlength: 30,
    },
    about: {
      type: String,
      required: "acerca de requerido",
      minlength: 2,
      maxlength: 30,
    },
    avatar: {
      type: String,
      validate: {
        validator: (v) => isURL(v),
        message: "el avatar debe ser una URL",
      },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("user", userSchema);
