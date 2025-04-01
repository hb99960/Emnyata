import express, { Express } from "express";

const app = express();
const PORT = 6009;

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Health check");
    res.status(200).send("Health check")
});

app.get("/health", (req, res) => {
    try{
        console.log(`Server is up and Running`);
        res.status(200).send(`Server is up and Running`);
    } catch(error){
        res.status(500).send(`Internal Server Error!!`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})