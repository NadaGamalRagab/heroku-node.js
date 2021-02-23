const hotelcategoryController = require('../controllers/hotelcato_controller');
// post => create in database
module.exports = (app) => {
    app.get('/hotels/category',
        hotelcategoryController.all);

    app.post('/hotels/category',
        hotelcategoryController.create);

    app.put('/hotels/category/:id',
        hotelcategoryController.edit);

    app.delete('/hotels/category/:id',
        hotelcategoryController.delete)
}