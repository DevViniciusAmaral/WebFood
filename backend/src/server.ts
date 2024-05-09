import cors from "cors";
import { env } from "./env";
import express from "express";
import { UserRoutes } from "./routes/UserRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", UserRoutes);

app.listen(env.PORT, () =>
  console.log(`Server is running: http://localhost:${env.PORT}`)
);
