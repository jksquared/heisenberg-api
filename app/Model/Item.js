'use strict';

const Lucid = use('Lucid');

class Item extends Lucid {

  user() {
    return this.belongsTo('App/Model/User', 'id');
  }

  duration() {
    return this.hasMany('App/Model/Duration');
  }

}

module.exports = Item;
