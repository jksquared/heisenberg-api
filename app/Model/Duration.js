'use strict';

const Lucid = use('Lucid');

class Duration extends Lucid {

  item() {
    return this.belongsTo('App/Model/Item');
  }

}

module.exports = Duration;
