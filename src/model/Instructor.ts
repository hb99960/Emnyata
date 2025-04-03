import mongoose, { Schema, Document } from "mongoose";

export interface IInstructor extends Document {
  name: string;
  email: string;
  expertise: string[];
  isVerified: boolean;
  slots: {
    date: Date;
    startTime: Date;
    endTime: Date;
    slotType: 'Emnyata' | 'Dost';
    status: 'booked' | 'cancelled';
  }[];
  zoomLink: string;
}

const SlotSchema = new Schema(
  {
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    slotType: { type: String, enum: ['Emnyata', 'Dost'], required: true },
    status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' }
  },
  { _id: false }
);

const InstructorSchema = new Schema<IInstructor>(
  {
    name: { type: String, required: true },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Email validation
    },
    expertise: { type: [String], required: true },
    isVerified: { type: Boolean, default: false },
    slots: { type: [SlotSchema], default: [] },
    zoomLink: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model<IInstructor>("Instructor", InstructorSchema);
