import Knex from 'knex';
import { prepareTable } from '../knexfile';

const TABLE_NAME = 'registrant';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    prepareTable(table);

    table.string('id').notNullable().primary();
    table.string('first_name');
    table.string('last_name');
    table.string('middle_name');
    table.string('home_address');
    table.string('home_contact_number');
    table.string('email_address');
    table.string('provincial_address').nullable();
    table.string('provincial_contact').nullable();
    table.integer('birthday');
    table.string('birth_place').nullable();
    table.string('gender', 1);
    table.string('marital_status');
    table.string('nationality');
    table.integer('height');
    table.integer('weight');
    table.string('father_name');
    table.string('father_occupation');
    table.string('mother_name');
    table.string('mother_occupation');
    table.string('guardian_name');
    table.string('guardian_relationship');
    table.string('guardian_address');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
