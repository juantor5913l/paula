// rolRoutes.js
const express = require("express");
const routerRoles = express.Router();
const controlRol = require("../controllers/controllerRol");


routerRoles.get("/", (req, res) => {
  res.send("Funcionalidad de Roles corriendo");
});

routerRoles.post("/new", controlRol.rolSave);

routerRoles.get("/list", controlRol.rolesList);

routerRoles.get("/find/:id", controlRol.rolXid);

routerRoles.put("/edit/:id", controlRol.rolEdit);

routerRoles.delete("/delete/:id", controlRol.rolDelete);

module.exports = routerRoles;
