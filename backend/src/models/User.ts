import mongoose, { Schema, Document } from "mongoose";

export type UserRole = "owner" | "member" | "admin";

export interface IUser extends Document {
  name: string;
  email: string;
  passWord: string;
  homeId?: mongoose.Types.ObjectId;
  role?: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passWord: {
      type: String,
    },
    homeId: {
      type: Schema.Types.ObjectId,
    },
    role: {
      type: String,
      enum: ["owner", "member", "admin"],
      default: "member",
    },
  },
  { timestamps: true },
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
