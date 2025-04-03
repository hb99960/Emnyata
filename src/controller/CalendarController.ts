
import Instructor from '../model/Instructor';
import Pairing from '../model/Pairing';
import { Request, Response } from 'express';

export const bookCalendar = async (req: Request, res: Response): Promise<void> => {
    // call function
    
}

export const cancelBooking = async (
    req: Request<{ instructorId: string; studentId: string; sessionId: string }>,
    res: Response
  )=>
    {
    const { instructorId, studentId, sessionId } = req.params;

  try {
    const pairing = await Pairing.findOne({
      _id: sessionId,
      instructorId,
      studentId,
    });

    if (!pairing) {
      res.status(404).json({ message: "Session not found" });
      return;
    }

    const instructor = await Instructor.findById(instructorId);
    if (!instructor) {
      res.status(404).json({ message: "Instructor not found" });
      return;
    }

    const slot = instructor.slots.find(
      (slot) =>
        new Date(slot.date).toISOString() === new Date(pairing.slots.date).toISOString() &&
        new Date(slot.startTime).toISOString() === new Date(pairing.slots.startTime).toISOString()
    );

    if (!slot) {
      res.status(404).json({ message: "Slot not found in instructor's schedule" });
      return;
    }

    // Update the slot to 'cancelled'
    slot.status = "cancelled";
    await instructor.save();

    // Update the pairing's slot status
    pairing.slots.status = "cancelled";
    await pairing.save();

    res.status(200).json({
      message: "Session cancelled successfully",
      pairing,
      slot,
    });
  } catch (error: any) {
        res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

