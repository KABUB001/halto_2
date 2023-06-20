const express = require("express")
const router = express.Router()
const {getAllPassengers, createPassenger, getPassenger, updatePassenger, deletePassenger}  = require("../controllers/userPassagerController")


router.route("/").get(getAllPassengers).post(createPassenger);

router.route("/:id").get(getPassenger).put(updatePassenger).delete(deletePassenger);


module.exports = router