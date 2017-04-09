'use strict';

const Lucid = use('Lucid');

class Duration extends Lucid {

  item() {
    return this.belonsTo('App/Model/Item');
  }

}

module.exports = Duration;
