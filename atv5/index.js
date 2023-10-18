const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extOutput: true}));

app.get("/", function (req, res) {
    res.render("index.html");
});

app.post("/dados", function (req, res) {
    let data = {
        nameOutput: req.body.nameInput,
        addressOutput: req.body.addressInput,
        phoneOutput: req.body.phoneInput,
        dateOutput: req.body.dateInput
    }
   
    console.log(data);
    res.render("dados.html", {data});
});

app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});
