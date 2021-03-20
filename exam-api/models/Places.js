const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true
    },
});


const Place = mongoose.model("NewPlace", PlaceSchema);

module.exports = NewPlace;