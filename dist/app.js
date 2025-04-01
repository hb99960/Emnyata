"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 6009;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    console.log("Health check");
    res.status(200).send("Health check");
});
app.get("/health", (req, res) => {
    try {
        console.log(`Server is up and Running`);
        res.status(200).send(`Server is up and Running`);
    }
    catch (error) {
        res.status(500).send(`Internal Server Error!!`);
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
