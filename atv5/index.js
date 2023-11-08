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
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        cpf: req.body.cpf,
        birthday: req.body.birthday,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        medicalField: req.body.medicalField,
        date: req.body.date,
        time: req.body.time,
        antibiotics: req.body.antibiotics,
        antiInflamatories: req.body.antiInflamatories,
        info: req.body.info
    }

    let errors = [];

    for (const field in data) {
        let value = data[field];
        if(value == "") {
            if(field == "antibiotics" || "antiInflamatories") {
                continue;
            }
            errors.push({field: field, message: " Esse campo não pode ser vazio"});
        }
    }
   
    console.log(data);
    res.render("dados.html", {data, errors});
});

app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});
