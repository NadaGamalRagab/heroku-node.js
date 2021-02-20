"use strict";

var hotelcategoryController = require('../controllers/hotelcato_controller'); // post => create in database


module.exports = function (app) {
  app.get('/hotels/category', hotelcategoryController.all);
  app.post('/hotels/category', hotelcategoryController.create);
  app.put('/hotels/catEgory/:id', hotelcategoryController.edit);
  app["delete"]('/hotels/catEgory/:id', hotelcategoryController["delete"]);
};