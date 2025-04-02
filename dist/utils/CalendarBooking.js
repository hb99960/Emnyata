"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const axios_1 = __importDefault(require("axios"));
const createEvent = (calendarId_1, summary_1, description_1, start_1, end_1, ...args_1) => __awaiter(void 0, [calendarId_1, summary_1, description_1, start_1, end_1, ...args_1], void 0, function* (calendarId, summary, description, start, end, attendees = []) {
    var _a;
    const url = process.env.CALENDAR_BOOK_SCRIPT_LINK || '';
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
        const response = yield axios_1.default.post(url, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error("Error calling Apps Script:", ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        }
        else if (error instanceof Error) {
            console.error("Unexpected Error:", error.message);
        }
        else {
            console.error("An unknown error occurred");
        }
        throw error;
    }
});
exports.createEvent = createEvent;
