import express, { Express } from "express";
import { bookCalendar, cancelBooking } from "../controller/CalendarController";

const router = express.Router();

router.post('/book', bookCalendar);
router.patch('/cancel/:instructorId/:studentId/:sessionId', cancelBooking);

export default router;