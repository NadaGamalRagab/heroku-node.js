const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CitiesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hotelsId: [Schema.Types.ObjectId],
  resturantsId: [Schema.Types.ObjectId],
  cruisesId: [Schema.Types.ObjectId],
});
const Cities = mongoose.model(
  "Cities in Egypt",
  CitiesSchema,
  "Cities in Egypt"
);

module.exports = Cities;
