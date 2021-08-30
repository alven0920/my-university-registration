import { Express } from 'express';

import { systemRoutes } from './routes/systemRoutes';

export default async function(app: Express, path: string) {
  app.use(`${path}/system`, systemRoutes);
}
