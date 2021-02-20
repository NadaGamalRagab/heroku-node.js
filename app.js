const express = require('express');
const UserRoutes = require('./routes/User_route')
const hotelRoutes = require('./routes/hotel_route')
const shoppingRoutes = require('./routes/shopping_route')
const ResturantRoutes = require('./routes/restaurant_route')
const cruiseRoutes = require('./routes/cruise_route')
const hotelcategoryRoutes = require('./routes/hotelcategory_route')
const app = express();

// // 4 make mongo connected
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mohamed:mohamed5@tripadvisorcluster.g48e8.mongodb.net/TripAdvisor?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // // //
    // //
    // // /*** here oreder of middleware is important***/
    // // //3 first middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// // //
// // //
hotelRoutes(app)
ResturantRoutes(app)
shoppingRoutes(app)
cruiseRoutes(app)
hotelcategoryRoutes(app)
UserRoutes(app)

app.use((err, req, res, next) => {
        // any error should return from response
        console.log(err.message);
        res.status(422).send({
            err: err.message
        })

    })
    // for index
module.exports = app;