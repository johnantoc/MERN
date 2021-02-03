const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  emails: [{ value: String, verified: Boolean }],
});

mongoose.model("users", userSchema);
