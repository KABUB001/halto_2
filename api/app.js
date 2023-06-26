const express = require("express")
const dotenv  = require("dotenv").config()
const app = express()
const errorHandler = require("./middleware/errorHandler")
const connectDb = require("./config/dbConnection")

connectDb()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/users/passengers", require("./routes/userPassengerRoutes"))

app.use("/api/users/conductors", require("./routes/userConductorRoutes"))

app.use(errorHandler)
const port = process.env.PORT || 5000 
app.listen(port,()=> console.log("binvenue"))