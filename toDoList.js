const express = require('express');
const path = require('path');
const parser = require('body-parser');
const { response } = require('express');
const app = express();
const toDoArray = [];
let idCounter = 1;


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/', function (req, res, next) {
    res.render('index',{toDoArray:toDoArray});
})

app.post('/', (req, res) => {
    let newItem = {id:idCounter, item:req.body.itemName, completed:false};
    toDoArray.push(newItem);
    res.render('index',{toDoArray:toDoArray});
    idCounter++;
});

app.get('/items', function (req, res, next) {
    res.render('index',{toDoArray:toDoArray});
})

app.post('/items', (req, res) => {
    for(let i = 0; i < toDoArray.length; i++) {
        if(eval('req.body.delCheck'+(toDoArray[i].id))) {
            toDoArray.splice(i, 1);
        } 
        if(eval('req.body.compCheck'+(toDoArray[i].id))) {
            toDoArray[i].completed = true;
        }
        toDoArray[i].item = eval('req.body.itemDesc'+(toDoArray[i].id));
    }
    
    res.render('index',{toDoArray:toDoArray});
});

const server = app.listen(4000, function() {
    console.log('listening on port 4000');
});


