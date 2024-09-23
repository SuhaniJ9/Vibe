const { Schema, model } = require('../connection');

const mySchema = new Schema({
    topic: { type: String, required: true },
    description: String,
    image: String
});

module.exports = model('events', mySchema);

