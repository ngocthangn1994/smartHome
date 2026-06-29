import mongoose, { Document } from "mongoose";
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
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export default User;
//# sourceMappingURL=User.d.ts.map