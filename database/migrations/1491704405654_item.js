'use strict';

const Schema = use('Schema');

class ItemTableSchema extends Schema {

  up() {
    this.create('items', (table) => {
      table.increments();

      table.integer('user_id')
        .references('users.id')
        .onDelete('CASCADE');

      table.string('item').notNullable();
      table.string('category').notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop('items');
  }

}

module.exports = ItemTableSchema;
