const Hotelcategory = require("../models/Category");

module.exports = {

    all(req, res, next) {
        const limit = parseInt(req.query.limit) || ''
        Hotelcategory.find({}).limit(limit)
            .then(cato => res.status(200).send(cato))
            .catch(next)
    },
    create(req, res, next) {
        // next from middelware
        const catoProps = req.body;
        Hotelcategory.create(catoProps)
            .then(hotelcategory =>
                res.status(201).send(hotelcategory)) // 201 to user
            .catch(next) // if error send to next middle ware


    },
    // //
    edit(req, res, next) {
        const catoId = req.params.id;
        const catoProps = req.body;
        // get user and update
        Hotelcategory.findByIdAndUpdate({
                _id: catoId
            }, catoProps)
            // if success get user after updated
            .then(() => Hotelcategory.findById({
                _id: catoId
            }))
            // //if you get user send it
            .then(hotelcategory => res.status(200).send(hotelcategory))
            // //else send to middle
            .catch(next);
    },
    // //
    delete(req, res, next) {
        const catoId = req.params.id;
        Hotelcategory.findByIdAndRemove({
            _id: catoId
        })

        .then(cato => res.status(204).send(cato))
            .catch(next);
    },
    getbyid(req, res, next) {
        const {
            id
        } = req.params;
        Hotelcategory.findById(id).then(
            cato => res.status(200).json(cato)).catch(next);;

    }
};