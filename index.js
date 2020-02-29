var express = require('express');
var path = require('path');


var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + "");

app.use(express.static('public'));
//sfes
app.get('/', (req, res)=>{
    res.render('trangchu');
})

app.get('*', (req, res)=>{
    res.redirect('/');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err)=>{
    if(err){
        console.log("error == ", err);
    }else{
        console.log("server is running on port", PORT);
    }
});
