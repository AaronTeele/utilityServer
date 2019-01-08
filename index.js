const express = require('express');
const app = express();
const Math = require('./math');
const port = 3000;


app.get('/math/add', (req, res) => {
    let query = req.query;
    let keys = Object.keys(query)
    let output = {
        input: {},
        sumString: '',
        sum: 0,
    };
    console.log(query, 'query')
    console.log(keys, 'keys')
    for (let i = 0; i < keys.length; i++) {
        let num = parseInt(query[keys[i]])
        if (Number.isNaN(num)) {
            res.send({
                error: 'You passed a non-number value into the parameters.'
            });
            
        }
        output.input[keys[i]] = num;
        console.log(output.input[keys[i]])
        output.sumString += `${num}`;
        if (i < keys.length - 1) {
            output.sumString += ' + ';
        };
        output.sum += Math.add(num);
    };
    res.send(output)
});

app.get('/math/multiply', (req, res) => {
    let query = req.query;
    let keys = Object.keys(query)
    let output = {
        input: {},
        productString: '',
        product: '',
    };

    for (let i = 0; i < keys.length; i++) {
        let num = parseInt(query[keys[i]])
        if (Number.isNaN(num)) {
            res.send({
                error: 'You passed a non-number value into the parameters.'
            });
        }
        output.input[keys[i]] = num;
        output.productString += `${num}`
        if (i < keys.length - 1) {
            output.productString += ' * ';
        };
        if (i === 0) {
            output.product = num;
        } else {
            output.product *= Math.multiply(num);
        };
    };
    res.send(output)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});