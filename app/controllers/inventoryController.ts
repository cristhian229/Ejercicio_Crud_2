import InventoryService from "../services/inventoryService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class InventoryController {
    static async getInventory(req: Request, res: Response): Promise<Response> {
        try {
            const inventoryService = container.resolve(InventoryService);
            const inventories = await inventoryService.findAllInventory();
            return res.json(
                {status: 200,
                data: inventories}
            );
        } catch (error: any) {
            return res.status(500).json({ 
                message: error.message });
        }
    }

}