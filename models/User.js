const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userName: String,
  credits: { type: Number, default: 0 },
  emails: [{ value: String, verified: Boolean }],
});

mongoose.model("users", userSchema);
