import os from 'os';
import cluster from 'cluster';

import { ExpressServer } from './server';
import { serverSettings } from '../../common/config';

const cpus = os.cpus();

if (serverSettings.isClustered && cluster.isMaster) {
  cpus.forEach(() => cluster.fork());
  cluster.on('exit', () => cluster.fork());
} else {
  const server = new ExpressServer();
  server.start();
}
