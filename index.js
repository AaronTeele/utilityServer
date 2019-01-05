const express = require('express');
const app = express();
const Math = require('./math');
const port = 3000;

app.get('/math/add', (req, res) =>{
    let query = req.query;
    let keys = Object.keys(query)
    let output = {
        input: {},
        sumString: '',
        sum: 0,
    }
    console.log('query', query)
    console.log('keys', keys)
    
     for (let i = 0; i < keys.length; i++) {
         let num = parseInt(query[keys[i]])
        output.input[keys[i]] = num;
        output.sumString += `${num}`
            if(i < keys.length - 1){
                output.sumString += ' + ';
            };
        output.sum += num;
     };

     res.send(output)
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});