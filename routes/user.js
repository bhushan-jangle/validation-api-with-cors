var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
      contractNo: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      engineNo: {
            type: String,
            trim: true,
            default: '',
            required:true
      },
      mfg: {
            type: String,
            trim: true,
            default: '',
            required: true,
      },
      basePrice: {
            type: String,
            trim: true,
            default: '',
            required: true
      },

      engine: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      suspension: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      steering: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      brakes: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      transmission: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      rating: {
            type: String,
            trim: true,
            default: '',
            required: true
      }
});
mongoose.model('valuationformdata', UserSchema);

module.exports = mongoose.model('valuationformdata');
