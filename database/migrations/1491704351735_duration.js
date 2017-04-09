'use strict';

const Schema = use('Schema');

class DurationTableSchema extends Schema {

  up() {
    this.create('duration', (table) => {
      table.increments();

      table.bigInteger('time');

      table.timestamps();
    });
  }

  down() {
    this.drop('duration');
  }

}

module.exports = DurationTableSchema;
