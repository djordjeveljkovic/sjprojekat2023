const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./models')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'))

db.sequelize.sync().then(() => { console.log('sinhronizovano') })

const businessRoutes = require('./routes/business')
app.use('/api/business', businessRoutes)

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
