const express = require("express")
const router = express.Router()
const {getAllConductors, createConductor, getConductor, updateConductor, deleteConductor} = require("../controllers/userConductorController")


router.route("/").get(getAllConductors).post(createConductor);


router.route("/:id").get(getConductor);


router.route("/:id").put(updateConductor);


router.route("/:id").delete(deleteConductor);


module.exports = router