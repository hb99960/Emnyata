import axios from "axios";

export const createEvent = async(calendarId: string, summary: string, description: string, start:Date, end:Date, attendees = []) => {
  const url: string = process.env.CALENDAR_BOOK_SCRIPT_LINK || '';

  console.log(url);

  const payload = {
    calendarId,
    summary,
    description,
    start,
    end,
    attendees,
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
        console.error("Error calling Apps Script:", error.response?.data || error.message);
        } else if (error instanceof Error) {
        console.error("Unexpected Error:", error.message);
        } else {
        console.error("An unknown error occurred");
        }
        throw error;
    }
}
