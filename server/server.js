//imports
import express from "espress";
import cors from "cors";
import {db} from "./dbConnection.js";

//start the express
const app = express();

//configure the express and cors

app.use(express.json());
app.use(cors());

//set up the PORT

const PORT = 8080;
app.listen(PORT, ()=> console.log(`Server is running in port ${PORT}`));

app.get("/", (req, res) =>{
    res.json({message: "Welcome to the server. Get Comfi"})
})