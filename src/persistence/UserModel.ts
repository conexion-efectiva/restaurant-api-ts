import mongoose, { Schema,  Types } from "mongoose";
import bcrypt from "bcrypt";
export interface User {
  name: string;
  email: string;
  password: string;
  _id:Types.ObjectId;
  isValidPassword: (password:string) => any
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password:string) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

const UserModel = mongoose.model("users", UserSchema);

export default UserModel