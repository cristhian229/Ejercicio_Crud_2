import { Application, Router } from "express";
import medicineRouter from "./medicineRouter";

const mainRouter: Router = Router();
mainRouter.use("/medicine", medicineRouter);

export default mainRouter;