const mongo = require("mongoose"); 

const DulcesSchema = new mongo.Schema(
    {
        referencia: {
            type: String,
            required: true,
            unique: true
        },
        nombre: {
            type: String,
            required: true
        },
        cantidad: {
            type: String,
            required: true
        },
        precio: {
            type: String,
            required: true
        },
        Descripcion: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        region: {
            type: String, 
            required: true
        },
        categoria: {
            type: String, 
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
); 

const Dulce = new mongo.model("Dulce", DulcesSchema);
module.exports = Dulce;  