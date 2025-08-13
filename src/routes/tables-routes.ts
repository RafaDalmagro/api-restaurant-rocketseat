import { Router } from "express";
import { TableController } from "../controllers/TablesController.js";
const tablesRoutes = Router();
const tableController = new TableController();

tablesRoutes.get("/", tableController.index);
// tablesRoutes.post("/", tableController.create);
// tablesRoutes.put("/:id", tableController.update);
// tablesRoutes.delete("/:id", tableController.remove);

export { tablesRoutes };
