// imports
const express = require('express');
const app = express();
const PORT = 3000;

// Rotas
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/views/index.html')
});

// POST
app.post('/add', function(req,res) {
    res.sendFile(__dirname + '/views/login.html')
})
app.post('/cadastro', function(req,res) {
    res.sendFile(__dirname + '/views/cadastro.html')
})



//Static
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

// Server listen on PORT 3000
app.listen(PORT, (req,res) => {
    console.log(`Listen PORT ${PORT}`)
});