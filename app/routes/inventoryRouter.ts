import { Router } from 'express';
import InventoryController from '../controllers/inventoryController';


const inventoryRouter = Router();
inventoryRouter.get('/', InventoryController.getInventory);

