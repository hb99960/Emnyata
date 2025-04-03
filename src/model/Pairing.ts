import mongoose, { Schema, Document } from "mongoose";

export interface IPairing extends Document {
    instructor: {
        instructorId: mongoose.Types.ObjectId;
        name?: string;
    };
    student:{
        studentId: mongoose.Types.ObjectId;
        name?: string;
    };
    slots: {
        date: Date;
        startTime: Date;
        endTime: Date;
        slotType: 'Emnyata' | 'Dost';
        status: 'booked' | 'cancelled';
    };
    question: {
        questionId?: string | null;
        questionName: string | null;
    };
    googleEventLink?: string;
}

const PairingSchema = new Schema<IPairing>(
  {
    instructor: {
        instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor", required: true },
        name: { type: String, required: false }
    },
    student: {
        studentId: {type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true},
        name: {type: String, required: false}
    },
    slots: [
      {
        date: { type: Date, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        slotType: {
            type: String,
            enum : ['Emnyata', 'Dost'],
            default: 'Emnyata',
        },
        status: {
          type: String,
          enum: ['booked', 'cancelled'],
          default: 'booked',
        },
      },
    ],
    question: {
        questionId: { type: String, required: false },
        questionName: { type: String, required: false }
    },
    googleEventLink: { type: String, required: false }
  },
  { timestamps: true }
);

export default mongoose.model<IPairing>("Pairing", PairingSchema);
