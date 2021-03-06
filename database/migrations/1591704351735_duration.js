'use strict';

const Schema = use('Schema');

class DurationTableSchema extends Schema {

  up() {
    this.create('durations', (table) => {
      table.increments();
      table.integer('item_id')
        .references('items.id')
        .onDelete('CASCADE');

      table.bigInteger('time').notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('durations');
  }

}

module.exports = DurationTableSchema;
