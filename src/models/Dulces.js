const mongoose = require("mongoose");

const DulcesSchema = new mongoose.Schema(
  {
    idUsuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
      trim:true,
    },
    referencia: {
      type: String,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    cantidad: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Dulce = mongoose.model("Dulce", DulcesSchema);
module.exports = Dulce;
