import { Router } from "express";
import { TablesController } from "../controllers/TablesController.js";
const tablesRoutes = Router();
const tablesController = new TablesController();

tablesRoutes.get("/", tablesController.index);
// tablesRoutes.post("/", tablesController.create);
// tablesRoutes.put("/:id", tablesController.update);
// tablesRoutes.delete("/:id", tablesController.remove);

export { tablesRoutes };
