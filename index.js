const express = require("express");
const cors = require("cors");
require("dotenv").config()
const router = require("./routes");


const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
app.use(cors());

app.use("/api/v1",router)

app.listen(port,() => {
    console.log(`server started at ${port}`)
})
