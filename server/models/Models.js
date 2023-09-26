const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const item = new Schema({
    id:String,
    name:String,
    price: Number,
    desc:String,
    color: String,
    url: String,
    isMarked: Boolean
});

const model = mongoose.model('model', item);

module.exports = model;
