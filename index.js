const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');

const app = express();

app.get('/', (request, response) => {

    readFile('./index.html', 'utf8', (err, html) =>{

        if(err){response.status(500).send('sorry, out of orderdede');}

        response.send(html);
    });

});


app.listen(process.env.PORT || 3000, () => console.log('app avaible on http://localhost:3000'));

