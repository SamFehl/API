const express = require('express');
const app = express();
const userRoutes = require("./src/idList/routes");

app.use(express.json());

const cors = require("cors");

app.use(cors({
    origin: '*'
}));

//Path to do something
app.get('/',(req,res)=> {
    res.send("Hello world!")
});

//API Route
app.use("/api/v1/userID", userRoutes);

//Port to run application
app.listen(5504, () => {
    console.log('Listening to the active port 2');
});