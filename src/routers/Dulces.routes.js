const { Router } = require("express");
const routerDulces = Router();
const controlDulce = require("../controllers/controllerDulces");

// Asegúrate de usar un middleware que autentique al usuario y coloque su ID en req.user

routerDulces.get("/", (req, res) => {
  res.send("Funcionalidad de Dulces corriendo");
});

routerDulces.post("/new", controlDulce.dulceSave);

routerDulces.get("/list", controlDulce.dulcesList);

routerDulces.get("/find/:id", controlDulce.dulceXid);

routerDulces.put("/edit/:id", controlDulce.dulceEdit);

routerDulces.delete("/delete/:id", controlDulce.dulceDelete);

routerDulces.get("/cliente/:userId", controlDulce.listarXUsuario);
  

module.exports = routerDulces;
