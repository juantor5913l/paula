const app = require("./app");
var port = 4000; 
var mongoose = require('./database'); 
var usuarioRouter = require("./src/routers/Usuarios.routes"); 
var dulcesRouter = require("./src/routers/Dulces.routes"); 
var cors = require("cors");
app.use(cors());
app.listen(port, ()=>{
    console.log("Servidor en el puerto "+port); 
}); 
app.use("/usuarios", usuarioRouter); 
app.use("/dulces", dulcesRouter);

app.get("/", (req, res) => {
    res.send("Api de mi dulceria online"); 
})