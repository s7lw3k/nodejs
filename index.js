const express = require('express');

const app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('index');

});


app.listen(process.env.PORT || 3000, () => console.log('app avaible on http://localhost:3000'));

