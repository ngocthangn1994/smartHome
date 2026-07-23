import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export type UserRole = "owner" | "member" | "admin";

export interface IUser extends Document {
  name: string;
  email: string;
  passWord: string;
  homeId?: mongoose.Types.ObjectId;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  correctPassword(
    candidatePassword: string,
    userPassword: string,
  ): Promise<boolean>;
  passWordchangedAt?: Date;
  passwordResetToken?: String;
  passwordResetExpires?: Date;
  createPasswordResetToken(): string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name"],
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "Email's already existed"],
      required: [true, "Please provide the valid email"],
      lowercase: true,
    },
    passWord: {
      type: String,
      select: false,
      required: [true, "Please provide a password"],
      minlength: [8, "At least 8 character"],
      maxlength: [80, "Maximum length password is 80 character."],
    },
    homeId: {
      type: Schema.Types.ObjectId,
    },
    role: {
      type: String,
      enum: ["member", "admin"],
      default: "member",
    },
    passwordchangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true },
);

userSchema.pre("save" as any, async function (this: IUser) {
  if (!this.isModified("passWord")) {
    return;
  }

  this.passWord = await bcrypt.hash(this.passWord, 10);
  if (!this.isNew) {
    this.passWordchangedAt = new Date(Date.now() - 1000);
  }
});

userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  console.log(resetToken, this.passwordResetToken);
  return resetToken;
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;

// userSchema.methods.changedPassWordAfter = function (
//   JWTTimestamp: number,
// ): boolean {
//   if (this.passWordchangedAt) {
//     const changedTimestamp = Math.floor(
//       this.passWordchangedAt.getTime() / 1000,
//     );
//     console.log(changedTimestamp, JWTTimestamp);
//     return JWTTimestamp < changedTimestamp;
//   }
//   return false;
// };
