const express =  require('express');
const app = express();

app.get("/somar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${sum(a, b)}`);
});

app.get("/multiplicar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} * ${b} = ${multiply(a, b)}`);
});

app.get("/subtrair/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} - ${b} = ${subtract(a, b)}`);
});

app.get("/dividir/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} / ${b} = ${divide(a, b)}`);
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});


function sum(a, b) {
    return Number.parseFloat(a) + Number.parseFloat(b);
}

function multiply(a, b) {
    return Number.parseFloat(a) * Number.parseFloat(b);
}

function subtract(a, b) {
    return Number.parseFloat(a) - Number.parseFloat(b);
}

function divide(a, b) {
    return Number.parseFloat(a) / Number.parseFloat(b);
}