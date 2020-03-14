var express = require('express');
var path = require('path');


var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + "");

app.use(express.static('public'));
//sfes
app.get('/', (req, res)=>{
    res.render('trangchu');
});

app.get('/.well-known/acme-challenge/j8cMIplL2UVrUwboQ3Jl1f0ZX5yaovt22_ZdO1hwGwY', (req, res) => {
    res.send("j8cMIplL2UVrUwboQ3Jl1f0ZX5yaovt22_ZdO1hwGwY.Ph8VGD33Ji6s5EMpQMgpzyqBmck8sFbP6iW2t94IOnY")
});
app.get('/.well-known/acme-challenge/NUxnSGD0VgXQAsdVXhisnunAKyvBJDT27MkclM0eomo', (req, res) => {
    res.send("NUxnSGD0VgXQAsdVXhisnunAKyvBJDT27MkclM0eomo.Ph8VGD33Ji6s5EMpQMgpzyqBmck8sFbP6iW2t94IOnY")
});

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
