const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const Passenger = require("../models/passengerModel")
//@desc Get all passengers
//@route GET /api/users/passenger
//@access public
const getAllPassengers = asyncHandler( async(req, res)=>{
    const passengers = await Passenger.find();
    res.status(200).json(passengers)
})

//@desc Create new passenger
//@route POST /api/users/passenger
//@access public
const createPassenger = asyncHandler( async (req, res)=>{
    let password = await bcrypt.hash(req.body.password, 10)
    console.log("The request body is:",req.body);
    const {name, first_name, email, phone, image} = req.body;
    
    if(!name || !email || !phone || !image || !password || !first_name){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    const passengers = await Passenger.create({
        name,
        first_name,
        email,
        phone,
        password,
        image 
    })
    res.status(201).json(passengers)
})

//@desc Get passenger
//@route GET /api/users/passenger/:id
//@access public
const getPassenger = asyncHandler( async (req, res)=>{
    const {id} = req.params
    const passenger = await Passenger.findById(id)
    console.log(passenger)
    if(passenger){
        res.status(200).json(passenger);       
    }else {
        res.status(404);
        throw new Error("Passenger not found");
    }
    
})

//@desc Update passenger
//@route PUT /api/users/passenger/:id
//@access public
const updatePassenger = asyncHandler( async (req, res)=>{
    const passenger = await Passenger.findById(req.params.id)
    if(passenger){
        const updatedPassenger = await Passenger.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updatedPassenger);       
    }else {
        res.status(404);
        throw new Error("Passenger not found");
    }
})

//@desc Delete passenger
//@route DELETE /api/users/passenger/:id
//@access public
const deletePassenger = asyncHandler( async (req, res)=>{
    const passenger = await Passenger.findById(req.params.id)
    if(passenger){
        const deletedPassenger = await Passenger.findByIdAndDelete(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(deletedPassenger);       
    }else {
        res.status(404);
        throw new Error("Passenger not found");
    }
})






module.exports = {getAllPassengers, createPassenger, getPassenger, updatePassenger, deletePassenger};