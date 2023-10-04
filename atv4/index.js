const express =  require('express');
const calculator = require('./util/calculator');
const app = express();

app.get("/somar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calculator.sum(a, b)}`);
});

app.get("/multiplicar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} * ${b} = ${calculator.multiply(a, b)}`);
});

app.get("/subtrair/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} - ${b} = ${calculator.subtract(a, b)}`);
});

app.get("/dividir/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} / ${b} = ${calculator.divide(a, b)}`);
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});