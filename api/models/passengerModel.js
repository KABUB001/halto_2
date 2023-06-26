const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');
const passengerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the conductor name "]
    },
    first_name: {
        type: String,
        required: [true, "Please add the conductor first_name "]
    },
    email:{
        type: String,
        required: [true, "Please add the conductor email "],
        unique : true
    },
    phone: {
        type: String,
        required: [true, "Please add the conductor phone number "]
    },
    password:{
        type: String,
        required: [true, "Please add the conductor phone number "]
    },
    image: {
        type: String,
        required: [true, "Please add the ID's scan "]
    }
}, {
    timestamps: true,
})


passengerSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Passager", passengerSchema)