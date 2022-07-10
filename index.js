import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/people", userRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res)=> res.send("You've tried reaching a rout that doesn't exist. "));

app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`));