const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String },
    number: { type: String},
    order: { type: String },
    extraFood: { type: String},
    quantity: { type: String},
    dateTime: { type: String},
    address: { type: String},
    message: { type: String},
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
