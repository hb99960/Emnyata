import mongoose, { Schema, Document } from "mongoose";

export interface IInstructor extends Document {
  name: string;
  email: string;
  expertise: string[];
  slots: {
    date: Date;
    startTime: Date; // Changed to Date type
    endTime: Date;
    googleEventId: string; // Google Calendar event ID
    status: 'available' | 'booked' | 'cancelled';
  }[];
}

const InstructorSchema = new Schema<IInstructor>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    expertise: { type: [String], required: true },
    slots: [
      {
        date: { type: Date, required: true },
        startTime: { type: Date, required: true }, // Use Date for better handling
        endTime: { type: Date, required: true },
        googleEventId: { type: String, required: true },
        status: {
          type: String,
          enum: ['available', 'booked', 'cancelled'],
          default: 'available',
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IInstructor>("Instructor", InstructorSchema);
