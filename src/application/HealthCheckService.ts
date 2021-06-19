import AbstractService from './shared/AbstractService';
import {
  dbConfig,
  serverSettings
} from '../common/config';

/**
 * Health check service - logs all environment variables
 */
export default class HealthCheckService extends AbstractService<any, void> {
  private LOG_ID = 'HealthCheckService';

  async execute(args?: any): Promise<void> {
    const LABEL = 'execute';

    console.info(this.LOG_ID, LABEL, JSON.stringify(serverSettings));
    console.info(this.LOG_ID, LABEL, JSON.stringify(dbConfig));
  }
}
