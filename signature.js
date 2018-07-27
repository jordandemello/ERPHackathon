const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  isCorporate: {
    type: Boolean,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  groupPosition: {
    type: String,
    required: true,
  },
  totalDistance: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  }
})
const UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel;
