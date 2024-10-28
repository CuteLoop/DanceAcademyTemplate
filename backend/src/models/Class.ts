import mongoose, { Schema, Document } from "mongoose";

interface IClass extends Document {
  name: string;
  description: string;
  schedule: Date;
}

const ClassSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  schedule: { type: Date, required: true },
});

export default mongoose.model<IClass>("Class", ClassSchema);
