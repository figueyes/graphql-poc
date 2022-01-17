import express, {Application} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { WinstonLogger } from '../winston-logger';
import { Routes } from './routes';
import { Graphql } from "./graphql";

dotenv.config();

class App {
  public server: Application;
  public appRoutes: Routes = new Routes();
  public appGraphql: Graphql = new Graphql();
  public log: WinstonLogger = new WinstonLogger();
  private BASE_PATH: string = process.env.BASE_PATH || '/api';

  constructor() {
    this.server = express();
    this.config();
  }

  private config(): void {
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(express.json());
    this.server.use(express.urlencoded({extended: false}));
    this.server.use(this.BASE_PATH, this.appRoutes.routes());
    this.appGraphql.route(this.server).then(() => log.info("Graphql server running"));
    this.log.initializer();
  }
}

export default new App().server;
