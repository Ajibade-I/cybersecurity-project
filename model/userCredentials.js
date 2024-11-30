const mongoose = require("mongoose");

const userCredentialsSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    email:{
        type:String
    },
    platform:{
        type:String
    }
  },
  { timestamp: true }
);

const Credentials = mongoose.model("Credentials", userCredentialsSchema);

module.exports = Credentials;
