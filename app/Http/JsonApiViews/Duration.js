const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Duration extends JsonApiView {
  get attributes() {
    return ['time'];
  }

}

module.exports = Duration;
