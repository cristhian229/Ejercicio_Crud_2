import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { resolve } from "path";
import { Dialect } from "sequelize";
import { strUnd } from "../interfaces/types";
import MedicineModel from "../models/medicineModel";
import InventoryModel from "../models/inventoryModel";

config({path: resolve(__dirname, "../../.env")});

const dialectDB: Dialect = process.env.DB_DIALECT as Dialect;
const dbHost: strUnd = process.env.DB_HOST;
const dbUserName: strUnd = process.env.DB_USER;
const dbPassword: strUnd = process.env.DB_PASSWORD;
const dbName: strUnd = process.env.DB_NAME;

console.log(dialectDB, dbHost, dbUserName, dbPassword, dbName);


if(!dialectDB || !dbHost || !dbUserName || !dbPassword || !dbName) throw new Error("There aren't all enviroment variables");

const sequelize = new Sequelize({
    dialect: dialectDB,
    host: dbHost,
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    models: [MedicineModel, InventoryModel]
});

export default sequelize;

