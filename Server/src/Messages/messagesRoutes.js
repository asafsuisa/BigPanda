var messagesController = require('./messagesController');

exports.initalizeRoutes = (router) => {
  router.route('/messages/add')
    .post(messagesController.add);
  router.route('/messages/getItems')
    .get(messagesController.getItems);
  router.route('/messages/getLastActivatedTime')
    .get(messagesController.getUserLastActived);
}
