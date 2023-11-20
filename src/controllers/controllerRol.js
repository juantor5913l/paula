const Rol = require("../models/Rol");
const jwt = require("jsonwebtoken");

// Insertar rol
const rolSave = async (req, res) => {
  try {
    const { nombreRol, estadoRol } = req.body;
    let rol = await Rol.findOne({ nombreRol });

    if (rol) {
      return res.status(400).json({
        mensaje: "El rol ya existe",
      });
    } else {
      rol = new Rol(req.body);
      await rol.save();
      return res.status(200).json({
        mensaje: "El rol fue creado",
      });
    }

    const payload = {
      rol: { id: rol.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, //1 hora
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// Listar los roles de la base de datos
const rolesList = async (req, res) => {
  try {
    const listaRoles = await Rol.find();
    res.status(200).send(listaRoles);
  } catch (error) {
    console.error(error);
  }
};

// Consultar rol por id
const rolXid = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const rol = await Rol.findById(id);
      res.status(200).send(rol);
    } else {
      res.send("No se encontró el rol");
    }
  } catch (error) {
    console.error(error);
  }
};

// Actualizar rol
const rolEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const rol = req.body;
    await Rol.findByIdAndUpdate(id, rol);
    return res.status(200).json({ mensaje: "Se editó el rol correctamente" });
  } catch (error) {
    console.log(error);
  }
};

// Eliminar rol
const rolDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await Rol.findByIdAndDelete(id);
    return res.status(200).json({ mensaje: "Se eliminó el rol" });

    const payload = {
      rol: { id: rol.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, //1 hora
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  rolSave,
  rolesList,
  rolXid,
  rolEdit,
  rolDelete,
};
