//imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//start the express
const app = express();

//configure the express and cors

app.use(express.json());
app.use(cors());

//set up the PORT

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server. Get Comfi" });
});

//todo: READ all data from my table

app.get("/goals", async function (req, res) {
  //we need to query our database here
  const query = await db.query(`SELECT * FROM goals;`);
  console.log(query);
  //parse data into JSON and wrangle data
  res.json(query.rows);
});

//todo: I want to create new data in the table
// i want to remember the body and form values
app.post("/add-goals", (req, res) => {
  // and element to store the data
  const newGoals = req.body;

  //database query
  //in our SQL queries, we can have a placeholder parameter that we will replace with the actual values when the client sends them
  const query = db.query(
    `INSERT INTO goals(name, eventTime, details, priority) VALUES ($1, $2, $3, $4)`,
    [
      newGoals.formValues.name,
      newGoals.formValues.eventTime,
      newGoals.formValues.pdetails,
      newGoals.formValues.priority,
    ]
  );
  res.json("Data sent", query);
});
