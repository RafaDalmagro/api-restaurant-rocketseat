import { Router } from "express";
import { TablesSessionsController } from "../controllers/TablesSessionsController.js";
const tablesSessionsRoutes = Router();
const tableSessionsController = new TablesSessionsController();

tablesSessionsRoutes.post("/", tableSessionsController.create);

export { tablesSessionsRoutes };
