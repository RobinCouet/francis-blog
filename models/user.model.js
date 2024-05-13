import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
  {
    firstname: { type: String, require: true },
    picture: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
  },
  { timestamps: { createdAt: true } }
)
userSchema.plugin(mongooseUniqueValidator)

export default mongoose.model('User', userSchema)