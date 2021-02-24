const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    booking: [{
        checkIn: {
            type: Date,
            required: true
        },
        checkOut: {
            type: Date,
            required: true
        },
        rooms: Number,
        children: Number,
        adults: Number,
        price: Number,
        userId: Schema.Types.ObjectId,
        email: String,
        phone: Number
    }],
    map: {
        latitude: {
            type: Schema.Types.Decimal128
        },
        longitude: {
            type: Schema.Types.Decimal128
        },
    },
    Pricedeals: [{
        name: String,
        link: String,
        pricePerNight: Number
    }],
    rooms: Number,
    images: [String],
    deals: [Schema.Types.ObjectId],
    amenities: [Schema.Types.ObjectId],
    class: Schema.Types.ObjectId,
    distance: {
        mainStreet: Number,
        beach: Number,
        park: Number,
        citycenter: Number,
    },
    langaugeSpoken: [Schema.Types.ObjectId],
    style: [String],
    reviews: [{
        text: String,
        rating: Number,
        userID: Schema.Types.ObjectId
    }],
    descripation: {
        text: String,
        lang: String,
    },
    likes: Number,
});

const Hotels = mongoose.model('hotels', HotelSchema, 'hotels1');

module.exports = Hotels;