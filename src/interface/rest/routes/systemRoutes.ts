import { Router } from 'express';
import HealthCheckService from '../../../application/HealthCheckService';

const systemRoutes = Router();

systemRoutes.get('/ping', async (req, res) => {
  const healthCheckService = new HealthCheckService();
  await healthCheckService.execute();

  res.send(null);
});

export { systemRoutes };
