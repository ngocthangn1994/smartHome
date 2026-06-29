import mongoose, { Schema, Document } from "mongoose";

export interface IHome extends Document {
  name: string;
  address: string;
  ownerId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const homeSchema = new Schema<IHome>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Home = mongoose.model<IHome>("Home", homeSchema);

export default Home;
