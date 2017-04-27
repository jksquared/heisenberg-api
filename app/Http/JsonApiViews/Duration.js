const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Duration extends JsonApiView {
  get attributes() {
    return ['time'];
  }

  item() {
    return this.hasMany('App/Http/JsonApiViews/Item', {
      included: true,
      excludeRelation: 'duration',
    });
  }

}

module.exports = Duration;
