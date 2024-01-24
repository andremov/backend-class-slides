import express from "express";
const app = express();

import punto1 from "./punto1.js";

app.use("/", punto1);

app.listen(8080);
