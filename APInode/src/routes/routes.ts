import { Router } from "express";
import userRoutes from "./users.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello World");
});

routes.use("/users", userRoutes);

export default routes;
