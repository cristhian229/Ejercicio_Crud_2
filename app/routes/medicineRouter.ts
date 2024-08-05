import { Router } from "express";
import MedicineController from "../controllers/medicineController";

const medicineRouter = Router();

medicineRouter.get("/", MedicineController.getMedicine);
medicineRouter.post("/", MedicineController.createMedicine);

export default medicineRouter;

