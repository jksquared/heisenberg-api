'use strict';

const Schema = use('Schema');

class DurationTableSchema extends Schema {

  up() {
    this.create('duration', (table) => {
      table.increments();
      table.integer('item_id')
        .references('items.id')
        .onDelete('CASCADE');

      table.bigInteger('time');

      table.timestamps();
    });
  }

  down() {
    this.drop('duration');
  }

}

module.exports = DurationTableSchema;
