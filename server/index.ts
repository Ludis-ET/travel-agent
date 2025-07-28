import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();


  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  app.get("/api/demo", handleDemo);

  return app;
}
