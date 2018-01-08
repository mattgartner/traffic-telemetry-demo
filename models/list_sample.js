const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "You must name the list!"
  },
  description: {
    type: String,
    trim: true
  },
  image_custom: String,
  created_by: {
    type: String
  }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

listSchema.pre("save", function (next) {
  // use this to changed the updated_on field
  next();
});

module.exports = mongoose.model("List", listSchema);