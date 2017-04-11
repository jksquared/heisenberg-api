'use strict';

const Lucid = use('Lucid');

class Item extends Lucid {

  duration() {
    return this.hasMany('App/Model/Duration');
  }

}

module.exports = Item;
