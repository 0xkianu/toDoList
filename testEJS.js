const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    let data = {name:'DevDoctor',
                hobbies:['coding', 'teaching', 'travel']}
    res.render('home',{data:data});
});

const server = app.listen(4000, function() {
    console.log('listening on port 4000');
});

