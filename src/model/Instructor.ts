import mongoose, { Schema, Document } from "mongoose";

export interface IInstructor extends Document {
  name: string;
  email: string;
  expertise: string[];
  isVerified: boolean;
}

const InstructorSchema = new Schema<IInstructor>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    expertise: { type: [String], required: true },
    isVerified: { type: Boolean, required:true, default:true}
  },
  { timestamps: true }
);

export default mongoose.model<IInstructor>("Instructor", InstructorSchema);
