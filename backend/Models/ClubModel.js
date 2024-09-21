const { Schema, model } = require('../connection');

const mySchema = new Schema({
    topic: { type: String, required: true },
    description: String,
    image: String,
    startDate: Date,
    endDate: Date,
    prize: String,
    winner: { type: Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('clubs', mySchema);