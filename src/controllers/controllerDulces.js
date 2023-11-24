const e = require("express");
const Dulce = require("../models/Dulces");
const jwt = require("jsonwebtoken");

// Insertar dulce
const dulceSave = async (req, res) => {
  try {
    const { referencia, nombre, cantidad, precio, Descripcion, region, categoria, imagen } = req.body;
    let dulce = await Dulce.findOne({ referencia });

    if (dulce) {
      return res.status(400).json({
        mensaje: "El dulce ya existe",
      });
    } else {
      dulce = new Dulce({ referencia, nombre, cantidad, precio, Descripcion, region, categoria, imagen });
      await dulce.save();
      const payload = {
        dulce: { id: dulce.id },
      };

      jwt.sign(
        payload,
        'oli', // Reemplaza con tu secreto
        {
          expiresIn: 3600, // 1 hora
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );

      return res.status(200).json({
        mensaje: "El dulce fue creado",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};

// Listar los dulces de la base de datos
const dulcesList = async (req, res) => {
  try {
    const { region, categoria } = req.query;
    const filtro = {};

    if (region) {
      filtro.region = region;
    }

    if (categoria) {
      filtro.categoria = categoria;
    }

    const listaDulces = await Dulce.find(filtro);
    res.status(200).send(listaDulces);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};

// Consultar dulce por id
const dulceXid = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const dulce = await Dulce.findById(id);
      res.status(200).send(dulce);
    } else {
      res.send("No se encontró el dulce");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};

// Actualizar dulce
const dulceEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const dulce = req.body;
    await Dulce.findByIdAndUpdate(id, dulce);
    return res.status(200).json({ mensaje: "Se editó el dulce correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};

// Eliminar dulce
const dulceDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await Dulce.findByIdAndDelete(id);
    return res.status(200).json({ mensaje: "Se eliminó el dulce" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};

module.exports = {
  dulceSave,
  dulcesList,
  dulceXid,
  dulceEdit,
  dulceDelete,
};
