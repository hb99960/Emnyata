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
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const MONGO_URI = process.env.MONGO_URI || '';
const MONGO_DB = process.env.MONGO_DB || '';
dotenv_1.default.config({ path: `./environments/.env` });
if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
    throw new Error("MONGODB_URI or DB_NAME is missing.");
}
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGO_URI, { dbName: MONGO_DB });
        console.log(`DB connected successfully`);
    }
    catch (error) {
        console.error("DB connection failed!!", MONGO_URI, MONGO_DB);
    }
});
exports.connectDB = connectDB;
