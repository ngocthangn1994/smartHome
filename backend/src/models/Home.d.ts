import mongoose, { Document } from "mongoose";
export interface IHome extends Document {
    name: string;
    address: string;
    ownerId: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
declare const Home: mongoose.Model<IHome, {}, {}, {}, mongoose.Document<unknown, {}, IHome, {}, mongoose.DefaultSchemaOptions> & IHome & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IHome>;
export default Home;
//# sourceMappingURL=Home.d.ts.map