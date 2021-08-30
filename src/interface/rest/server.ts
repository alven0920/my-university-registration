import cors from 'cors';
import 'dotenv/config';

import http from 'http';

import express, { Express, Response, NextFunction } from 'express';
import { serverSettings } from '../../common/config';
import { StatusCodes, StatusMessage } from '../../common/constants';
import { createErrorResponse } from './restUtils';
import routes from './routes';

const { port } = serverSettings;

export class ExpressServer {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = port;
    this.setupMiddleware();
  }

  private async setupMiddleware(): Promise<void> {
    this.app.use(express.json({ limit: 2048000 }));
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(
      express.urlencoded({
        extended: true
      })
    );

    // Enable CORS
    this.app.use((_, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      next();
    });

    this.app.use(cors());

    this.app.use(express.json());

    // routes
    routes(this.app, '/api/v1');

    // For pages that are not available
    // Security fix for XSS-Reflected issue
    this.app.use(async (_, res) => {
      res
        .status(StatusCodes.NotFound)
        .send(
          createErrorResponse(
            StatusCodes.NotFound,
            StatusMessage.NotFound,
            'Page Cannot Be Found'
          )
        );
    });
  }

  start(): void {
    http.createServer(this.app).listen(this.port);

    const message = `Server is now listening at port ${this.port} - process id ${process.pid}`;

    console.info(message);
  }
}
