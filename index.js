const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./database');
const usuarioRouter = require("./src/routers/Usuarios.routes");
const dulcesRouter = require("./src/routers/Dulces.routes");
const rolesRouter = require("./src/routers/Rol.routes");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use("/usuarios", usuarioRouter);
app.use("/dulces", dulcesRouter);
app.use("/roles", rolesRouter);

app.listen(port, () => {
    console.log("Servidor en el puerto " + port);
});

app.get("/", (req, res) => {
    res.send("API de mi dulcería online");
});
