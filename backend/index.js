import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";

import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost/3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["content-type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("App is connected to Database");
    app.listen(PORT, () => {
      console.log(`App is listening to ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
