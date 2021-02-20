const hotelcategory = require("../models/Category");

module.exports = {

    all(req, res, next) {
        const limit = parseInt(req.query.limit) || ''
        hotelcategory.find({}).limit(limit)
            .then(cato => res.status(200).send(cato))
            .catch(next)
    },
    create(req, res, next) {
        // next from middelware
        const catoProps = req.body;
        hotelcategory.create(catoProps)
            .then(cato =>
                res.status(201).send(cato)) // 201 to user
            .catch(next) // if error send to next middle ware


    },
    // //
    edit(req, res, next) {
        const catoId = req.params.id;
        const catoProps = req.body;
        // get user and update
        hotelcategory.findByIdAndUpdate({
                _id: catoId
            }, catoProps)
            // if success get user after updated
            .then(() => hotelcategory.findById({
                _id: catoId
            }))
            // //if you get user send it
            .then(cato => res.status(200).send(cato))
            // //else send to middle
            .catch(next);
    },
    // //
    delete(req, res, next) {
        const catoId = req.params.id;
        hotelcategory.findByIdAndRemove({
            _id: catoId
        })

        .then(cato => res.status(204).send(cato))
            .catch(next);
    }
};