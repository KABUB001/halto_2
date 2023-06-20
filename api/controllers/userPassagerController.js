//@desc Get all passengers
//@route GET /api/users/passenger
//@access public
const getAllPassengers = (req, res)=>{
    res.status(200).json({message: "Get all passengers"})
}

//@desc Create new passenger
//@route POST /api/users/passenger
//@access public
const createPassenger = (req, res)=>{
    res.status(201).json({message: "Create passenger"})
}

//@desc Get passenger
//@route GET /api/users/passenger/:id
//@access public
const getPassenger = (req, res)=>{
    res.status(201).json({message: `Get passenger for ${req.params.id}`});
}

//@desc Update passenger
//@route PUT /api/users/passenger/:id
//@access public
const updatePassenger = (req, res)=>{
    res.status(200).json({message: `Update passenger for ${req.params.id}`});
}

//@desc Delete passenger
//@route DELETE /api/users/passenger/:id
//@access public
const deletePassenger = (req, res)=>{
    res.status(200).json({message: `Delete passenger for ${req.params.id}`})
}






module.exports = {getAllPassengers, createPassenger, getPassenger, updatePassenger, deletePassenger};