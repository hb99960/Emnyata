import mongoose, { Schema, Document, model } from "mongoose";

export interface IPolicy extends Document {
    startDate: Date;
    slots: number; 
    duration: number;
}

const PolicySchema = new Schema<IPolicy>({
    startDate: { type: Date, required: true },
    slots: { type: Number, required: true },
    duration: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model<IPolicy>("Policy", PolicySchema);
