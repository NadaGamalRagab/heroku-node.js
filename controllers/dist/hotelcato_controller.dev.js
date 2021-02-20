"use strict";

var hotelcategory = require("../models/Category");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || '';
    hotelcategory.find({}).limit(limit).then(function (cato) {
      return res.status(200).send(cato);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var catoProps = req.body;
    hotelcategory.create(catoProps).then(function (cato) {
      return res.status(201).send(cato);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var catoId = req.params.id;
    var catoProps = req.body; // get user and update

    hotelcategory.findByIdAndUpdate({
      _id: catoId
    }, catoProps) // if success get user after updated
    .then(function () {
      return hotelcategory.findById({
        _id: catoId
      });
    }) // //if you get user send it
    .then(function (cato) {
      return res.status(200).send(cato);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var catoId = req.params.id;
    hotelcategory.findByIdAndRemove({
      _id: catoId
    }).then(function (cato) {
      return res.status(204).send(cato);
    })["catch"](next);
  }
};