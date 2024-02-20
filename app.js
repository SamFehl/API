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

app.use("/apiv1/", userRoutes);

//Port to run application
app.listen(5503, () => {
    console.log('Listening to the active port');
});