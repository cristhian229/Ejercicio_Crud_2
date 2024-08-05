import 'reflect-metadata';
import './config/container';
import './schedule';
import express, { Application } from 'express';
import sequelize from './config/database';
import cors from 'cors';
import { config } from 'dotenv';
import mainRouter from './routes/Router';
import errorHandler from './middlewares/errorHandler';

config();

const PORT: number | string = process.env.PORT || 3001;
const app: Application = express();

const corsOptions = {
    origin: "http://localhost:4000",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/app", mainRouter);
app.use(errorHandler)


const startServer = async (): Promise<void> => {
    try{
       await sequelize.authenticate();
       console.log("Connection has been extablished successfuly");
       await sequelize.sync();
       app.listen(PORT, () => {
            console.log("Server is running on port", PORT);        
       })
    }catch(err: any){
        console.error("There was an error trying to connet the database", err)
    }
};


startServer();
