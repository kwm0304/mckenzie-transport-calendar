const { Schema, model } = require('mongoose');
const paymentSchema = require('./Payment')

const eventSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 15
        },
        lastName: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 20
        },
        customerEmail: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        storeName: {
            type: String
        },
        customerStreetAddress: {
            type: String,
            required: true
        },
        customerCity: {
            type: String,
            required: true,
        },
        customerState: {
            type: String,
            required: true
        },
        payments: [paymentSchema]
    }
);

const Event = model('Event', eventSchema);

module.exports = Event;