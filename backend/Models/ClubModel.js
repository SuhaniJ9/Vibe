const { Schema, model } = require('../connection');

const mySchema = new Schema({
    topic: { type: String, required: true },
    description: String,
    image: String,
    startDate: Date,
    endDate: Date,
    prize: String
});

module.exports = model('clubs', mySchema);

