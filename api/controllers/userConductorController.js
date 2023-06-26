const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const Conductor = require("../models/conductorModel")
//@desc Get all conductors
//@route GET /api/users/conductors
//@access public
const getAllConductors = asyncHandler( async(req, res)=>{
    const conductors = await Conductor.find();
    res.status(200).json(conductors)
})

//@desc Create new conductor
//@route POST /api/users/conductors
//@access public
const createConductor = asyncHandler( async (req, res)=>{
    let password = await bcrypt.hash(req.body.password, 10)
    console.log("The request body is ok:",req.body);
    const {name, first_name, email, phone, image} = req.body;

    console.log("The request password is:",password);
    if(!name || !email || !phone || !image || !password || !first_name){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    const conductors = await Conductor.create({
        name,
        first_name,
        email,
        phone,
        password,
        image 
    })
    res.status(201).json(conductors)
    res.send(conductors)
})

//@desc Get conductor
//@route GET /api/users/conductors/:id
//@access public
const getConductor = asyncHandler( async (req, res)=>{
    const {id} = req.params
    const conductor = await Conductor.findById(id)
    console.log(conductor)
    if(conductor){
        res.status(200).json(conductor);       
    }else {
        res.status(404);
        throw new Error("Conductor not found");
    }
    
})

//@desc Update conductor
//@route PUT /api/users/conductors/:id
//@access public
const updateConductor = asyncHandler( async (req, res)=>{
    const conductor = await Conductor.findById(req.params.id)
    if(conductor){
        const updatedConductor = await Conductor.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updatedConductor);       
    }else {
        res.status(404);
        throw new Error("Conductor not found");
    }
})

//@desc Delete conductor
//@route DELETE /api/users/conductors/:id
//@access public
const deleteConductor = asyncHandler( async (req, res)=>{
    const conductor = await Conductor.findById(req.params.id)
    if(conductor){
        const deletedConductor = await Conductor.findByIdAndDelete(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(deletedConductor);       
    }else {
        res.status(404);
        throw new Error("Conductor not found");
    }
})






module.exports = {getAllConductors, createConductor, getConductor, updateConductor, deleteConductor};