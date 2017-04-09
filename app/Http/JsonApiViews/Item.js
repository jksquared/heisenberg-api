const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Item extends JsonApiView {
  get attributes() {
    return ['item', 'category'];
  }

}

module.exports = Item;
