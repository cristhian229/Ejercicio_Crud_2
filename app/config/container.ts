import { container } from "tsyringe";
import InventoryRepository from "../repositories/invetoryRepository";
import InventoryService from "../services/inventoryService";
import MedicineRepository from "../repositories/medicineRepository";
import MedicineService from "../services/medicineService";

container.registerSingleton<InventoryRepository>("InventoryRepository", InventoryRepository);
container.registerSingleton<InventoryService>("InventoryService", InventoryService);
container.registerSingleton<MedicineRepository>("MedicineRepository", MedicineRepository);
container.registerSingleton<MedicineService>("MedicineService", MedicineService);