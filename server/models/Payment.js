const { Schema } = require('mongoose');

const paymentSchema = new Schema(
    {
        price: {
            type: Number,
            required: true
        },
        paymentMethod: {
            type: String,
            required: true
        }
    }
);

module.exports = paymentSchema;