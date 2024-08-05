import { injectable } from "tsyringe";
import InventoryModel from "../models/inventoryModel";
import MedicineModel from "../models/medicineModel";
import { Op } from "sequelize";


@injectable()
export default class MedicineRepository{

    async findAllMedicine():Promise<MedicineModel[]>{
        return await MedicineModel.findAll()
    }

    async updateMedicineQuantity(medicineId: number, newQuantity: number): Promise<[afectedCount: number]> {
        return await MedicineModel.update(
            { quantity: newQuantity },
            { where: { id: medicineId } }
        );
    }

    async findMedicineById(id: number): Promise<MedicineModel | null> {
        return await MedicineModel.findByPk(id)
    }

    async createMedicine(medicine: MedicineModel): Promise<MedicineModel> {
        return await MedicineModel.create(medicine)
    }

    async updateMedicine(id: number, medicine: Partial<MedicineModel>): Promise<[afectedCount: number]> {
        const [affectedCount] = await MedicineModel.update(medicine, { where: { id: id } });
        return [affectedCount];
    }

    async deleteMedicine(id: number): Promise<number> {
        return await MedicineModel.destroy({
            where: { id: id }
        });
    }

}