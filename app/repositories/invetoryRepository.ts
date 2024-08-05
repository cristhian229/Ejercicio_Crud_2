import { injectable } from "tsyringe";
import InventoryModel from "../models/inventoryModel";
import MedicineModel from "../models/medicineModel";
import { GroupedCountResultItem, Op } from "sequelize";


@injectable()
export default class InventoryRepository{
    async findAllInvetory():Promise<InventoryModel[]>{
        return await InventoryModel.findAll()
    }

    async findExpiredInventories(): Promise<InventoryModel[]> {
        return await InventoryModel.findAll({
            include: [{
                model: MedicineModel,
                where: {
                    expiredDate: {
                        [Op.lte]: new Date()
                    }
                }
            }]
        })        
    }

    async findInventoryById(id: number): Promise<InventoryModel | null> {
        return await InventoryModel.findByPk(id)
    }

    async createInventory(inventory: InventoryModel): Promise<InventoryModel> {
        return await InventoryModel.create(inventory)
    }

    async findAvailableMedicines(): Promise<any[]> {
        return await InventoryModel.findAll({
            attributes: ['id', 'status'],
            include: [{
                model: MedicineModel,
                attributes: ['name', 'expiredDate', 'quantity', 'price'],
                where: {
                    status: 'disponible'
                }
            }]
        })
    }


    async deleteInventory(id: number): Promise<number> {
        return await InventoryModel.destroy({
            where: { id: id }
        });
    }

    async findInventoryByMedicineId(medicineId: number): Promise<InventoryModel | null> {
        return await InventoryModel.findOne({
            where: { medicineId: medicineId }
        })
    }

    async countAvailableMedicines(): Promise<number> {
        return await InventoryModel.count({ where: { status: 'available'} });
    }


    async findMedicineByStatus(status: string): Promise<InventoryModel[]> {
        return await InventoryModel.findAll({
            where: { status: status },
            include: [{
                model: MedicineModel,
                required: true // Esto asegura que solo se incluyan los inventarios que tienen una medicina asociada
            }]
        });
    }

}