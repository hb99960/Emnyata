import express, { Express } from "express";
import { connectDB } from "./model/db";
import CalendarRoutes from "./routes/CalendarRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import Admin from "./model/Admin";
import Instructor from "./model/Instructor";
import Pairing from "./model/Pairing";
import Policy from "./model/Policy";

const app = express();
const PORT = 6009;

connectDB();

Admin.createCollection()
    .then( () => console.log("Admin Collection created"))
    .catch( (error) => console.error("Error creating user collection", error));

Instructor.createCollection()
    .then( () => console.log("Instructor collection created"))
    .catch( (error) => console.error("Error creating team collection", error));

Pairing.createCollection()
    .then( () => console.log("Pairing collection created"))
    .catch( (error) => console.error("Error creating teamRequest collection", error));

Policy.createCollection()
    .then( () => console.log("Policy collection created"))
    .catch( (error) => console.error("Error creating problemStatement collection"));

// Student.createCollection()
//     .then( () => console.log("Hackathon collection created"))
//     .catch( (error) => console.error("Error in creating Hackathon collection"))

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

app.use('/calendar',CalendarRoutes);
app.use('/admin', AdminRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})