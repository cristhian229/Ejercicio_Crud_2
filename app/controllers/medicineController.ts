import MedicineService from "../services/medicineService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class MedicineController{
    static async getMedicine(req: Request, res: Response): Promise<Response> {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicines = await medicineService.findAllMedicine();
            return res.json(
                {status: 200,
                data: medicines}
            );
        } catch (error: any) {
            return res.status(500).json({ 
                message: error.message });
        }
    }

    static async createMedicine(req: Request, res: Response): Promise<Response> {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicine = await medicineService.createMedicine(req.body);
            return res.json(
                {status: 200,
                data: medicine}
            );
        } catch (error: any) {
            return res.status(500).json({ 
                message: error.message });
        }
    }

    static async deleteMedicine(req: Request, res: Response): Promise<Response> {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicine = await medicineService.deleteMedicine(Number(req.params.id));
            return res.json(
                {status: 200,
                data: medicine}
            );
        } catch (error: any) {
            return res.status(500).json({ 
                message: error.message });
        }
    }



}