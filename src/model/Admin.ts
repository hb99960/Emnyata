import mongoose, {Schema, Document} from "mongoose";

export interface IAdmin extends Document {
  username: string;
  role: 'SuperAdmin' | 'Moderator';
}

const AdminSchema = new Schema<IAdmin>(
  {
    username: { type: String, required: true, unique: true },
    role: { type: String, enum: ['SuperAdmin', 'Admin', 'Mentor'], required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IAdmin>("Admin", AdminSchema);
