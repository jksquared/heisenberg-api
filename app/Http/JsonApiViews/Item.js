const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Item extends JsonApiView {
  get attributes() {
    return ['item', 'category', 'total_time'];
  }

  durations() {
    return this.hasMany('App/Http/JsonApiViews/Duration', {
      included: false,
      excludeRelation: 'item',
    });
  }

}

module.exports = Item;
