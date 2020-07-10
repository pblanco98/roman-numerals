const express = require('express');
const app = express();
const cors = require('cors');
const convert = require('./conversionAlgo');

app.use(express.json());
app.use(cors());

app.post('/convert', (req,res) => {
    res.json({
        result: convert(req.body.numeral)
    })
})

app.listen(5001, () => {
    console.log('Listening on http://localhost:5001')
}) 
