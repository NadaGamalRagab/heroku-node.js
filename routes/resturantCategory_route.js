const resturantCateoryController = require("../controllers/ResturantCategory_controller");
// post => create in database
module.exports = (app) => {
  app.get("/resturants/category", resturantCateoryController.all);
  app.get("/resturants/category/:id", resturantCateoryController.getbyid);

  app.post("/resturants/category", resturantCateoryController.create);

  app.put("/resturants/category/:id", resturantCateoryController.edit);

  app.delete("/resturants/category/:id", resturantCateoryController.delete);
};
