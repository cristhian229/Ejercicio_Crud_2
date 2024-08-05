import { Request, Response, NextFunction } from "express";

const errorHandler = (err:any, req: Request, res: Response, next: NextFunction): void => {
    console.log(err.stack);
    res.status(500).json({status:500, message: err.message})
}

export default errorHandler;