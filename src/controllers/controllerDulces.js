const e = require("express");
const Dulce = require("../models/Dulces");
const mongoose = require("mongoose");


// Insertar dulce
const dulceSave = async (req, res) => {
  try {
    const {
      idUsuario,
      referencia,
      nombre,
      cantidad,
      precio,
      descripcion,
      imagen,
      region,
      categoria,
    } = req.body;

    // Verifica si idUsuario está presente
    if (!idUsuario) {
      return res.status(400).json({ error: "El campo idUsuario es requerido." });
    }

    const nuevoDulce = new Dulce({
      idUsuario,
      referencia,
      nombre,
      cantidad,
      precio,
      descripcion,
      imagen,
      region,
      categoria,
    });

    await nuevoDulce.save();

    console.log("Dulce creado con éxito");
    return res.json({ ok: "SI", msg: "Dulce creado con éxito" });
  } catch (error) {
    console.error("Error al crear el dulce:", error);
    return res.status(500).json({ ok: "NO", msg: "Error al crear el dulce" });
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


const listarXUsuario = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.error("Error: userId no es un ObjectId válido.");
      return res.status(400).json({ mensaje: "Error: userId no es un ObjectId válido." });
    }

    const dulcesUsuario = await Dulce.find({ idUsuario: new mongoose.Types.ObjectId(userId) });


    console.log('Dulces del Usuario:', dulcesUsuario);

    res.status(200).json(dulcesUsuario);
  } catch (error) {
    console.error("Error al obtener los dulces del usuario", error);
    res.status(500).json({ mensaje: "Error al obtener los dulces del usuario", error: error.message });
  }
};


module.exports = {
  dulceSave,
  dulcesList,
  dulceXid,
  dulceEdit,
  dulceDelete,
  listarXUsuario
};
