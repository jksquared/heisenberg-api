'use strict';

const Lucid = use('Lucid');

class Item extends Lucid {

  durations() {
    return this.hasMany('App/Model/Duration');
  }

}

module.exports = Item;
