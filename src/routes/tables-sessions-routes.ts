import { Router } from "express";
import { TablesSessionsController } from "../controllers/TablesSessionsController.js";
const tablesSessionsRoutes = Router();
const tableSessionsController = new TablesSessionsController();

tablesSessionsRoutes.get("/", tableSessionsController.index);
tablesSessionsRoutes.post("/", tableSessionsController.create);
tablesSessionsRoutes.patch("/:id", tableSessionsController.update);

export { tablesSessionsRoutes };
