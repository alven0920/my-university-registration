import { MySQLBaseDataSource } from '../shared/MySQLBaseDataSource';

describe('MySQL Base Data Source', () => {
  it('should connect to the instance of MySQL database', async (done) => {
    const mySqlDs = MySQLBaseDataSource.getInstance();

    const dualResponse = (await mySqlDs.db
      ?.table('dummy')
      .select('*')) || [];

    done();
  });
});