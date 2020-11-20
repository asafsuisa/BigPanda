let messagesRouters = require('./Messages/messagesRoutes');

let router = require('express').Router();

messagesRouters.initalizeRoutes(router);

module.exports = router;