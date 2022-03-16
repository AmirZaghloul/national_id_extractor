import express from "express";
import router from "./api/index.js";
const app = express();

// Here we parse the body to json
app.use(express.json());

// Here we use the router in the api directory
app.use(router);

// can pass the post as environment variable
app.listen(3000, () => {
  //this is a call back function when the server starts
  console.log("server started");
});
