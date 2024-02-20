const express = require('express');
const app = express();
const userRoutes = require("./src/users/routes");

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
app.use("/api/v1/users", userRoutes);

//Port to run application
app.listen(5503, () => {
    console.log('Listening to the active port');
});