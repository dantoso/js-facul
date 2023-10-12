const express =  require('express');
const app = express();
const mustacheExpress = require('mustache-express');

const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/dados", urlEncodedParser, function (req, res) {
    const name = req.body.nameOutput
    const address = req.body.addressOutput
    const phone = req.body.phoneOutput
    const date = req.body.dateOutput

    const data = [name, address, phone, date];
    res.send(data);
});

app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});
