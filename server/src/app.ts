import express from "express";
import mongoose, { Error } from "mongoose";
import testCaseRoutes from "./routes/testCaseRoutes";

const app = express();

app.use(express.json());
app.use("/api/testcases", testCaseRoutes);

mongoose
  .connect("mongodb://localhost:27017/testcasemanager")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", Error));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
