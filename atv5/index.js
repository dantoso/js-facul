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
        name: req.body.nameInput,
        address: req.body.addressInput,
        phone: req.body.phoneInput,
        date: req.body.dateInput
    }

    let error = data.name == "" || data.address == "" || data.phone == "" || data.date == ""
   
    console.log(data);
    res.render("dados.html", {data, error});
});

app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});
