'use strict';

const Lucid = use('Lucid');

class Duration extends Lucid {

  items() {
    return this.belongsTo('App/Model/Item');
  }

}

module.exports = Duration;
