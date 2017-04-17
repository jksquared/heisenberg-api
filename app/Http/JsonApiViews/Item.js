const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Item extends JsonApiView {
  get attributes() {
    return ['item', 'category'];
  }

  durations() {
    return this.hasMany('App/Http/JsonApiViews/Duration', {
      included: true,
      excludeRelation: 'item'
    });
  }

}

module.exports = Item;
