import mongoose, { Schema, Document } from "mongoose";

export interface IPairing extends Document {
    instructorId: mongoose.Types.ObjectId;
    slots: {
        date: Date;
        startTime: Date;
        endTime: Date;
        status: 'available' | 'booked' | 'cancelled';
    }[];
    module: string;
    questions: string[]; // Changed from ObjectId[] to string[]
}

const PairingSchema = new Schema<IPairing>(
  {
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor", required: true },
    slots: [
      {
        date: { type: Date, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        status: {
          type: String,
          enum: ['available', 'booked', 'cancelled'],
          default: 'available',
        },
      },
    ],
    module: { type: String, required: true },
    questions: [{ type: String, required: true }], // Changed to array of strings
  },
  { timestamps: true }
);

export default mongoose.model<IPairing>("Pairing", PairingSchema);
