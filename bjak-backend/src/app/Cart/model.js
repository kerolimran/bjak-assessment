const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})
let CustomerInfoSchema = new Schema({
    firstName: { type: Text },
    lastName: { type: Text },
    address1: { type: Text },
    address2: { type: Text },
    postcode: { type: Text },
    city: { type: Text },
    state: { type: Text },
    phoneNumber: { type: Text },
    email: { type: Text }
})
const CartSchema = new Schema({
    items: [ItemSchema],
    customerInfo: CustomerInfoSchema,
    subTotal: {
        default: 0,
        type: Number
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('cart', CartSchema);