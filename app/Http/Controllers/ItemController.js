'use strict';

const Item = use('App/Model/Item');
const attributes = ['item', 'category'];

class ItemController {

  * index(request, response) {
    const items = yield Item.with('durations')
      .where({ user_id: request.authUser.id })
      .fetch();

    const showitems = items.toJSON().map(Item.convertItem);

    response.jsonApi('Item', showitems);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      user_id: request.authUser.id,
    };
    const item = yield Item.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('Item', item);
  }

  * show(request, response) {
    const id = request.param('id');
    const item = yield Item.with('durations').where({ id }).firstOrFail();

    response.jsonApi('Item', Item.convertItem(item.toJSON()));
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const item = yield Item.with().where({ id }).firstOrFail();
    item.fill(Object.assign({}, input, foreignKeys));
    yield item.save();

    response.jsonApi('Item', item);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const item = yield Item.query().where({ id }).firstOrFail();
    yield item.delete();

    response.status(204).send();
  }

}

module.exports = ItemController;
