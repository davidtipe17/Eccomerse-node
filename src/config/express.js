import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "*" }));

export default app;