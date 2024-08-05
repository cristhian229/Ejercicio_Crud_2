import cron from 'node-cron';
import { container } from 'tsyringe';
import InventoryService from './services/inventoryService';

const inventoryService = container.resolve(InventoryService);

cron.schedule('25 0 * * *', async () => {
    console.log('Ejecutando tarea de validación de fecha de vencimiento a la medianoche');
    await inventoryService.validateExpiredDate();
});
