'use strict';

const Lucid = use('Lucid');

class Item extends Lucid {

  durations() {
    return this.hasMany('App/Model/Duration');
  }

  static convertItem(item) {
    let totalTime = 0;

    if (item.durations) {
      totalTime = item.durations.reduce((sum, val) => sum - -val.time, 0);
    }

    return Object.assign({
      total_time: totalTime,
    }, item);
  }

}

module.exports = Item;
