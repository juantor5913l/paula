const { default: mongoose } = require("mongoose");
const mongo = require("mongoose"); 

(async () => {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/MiDulceOnline');
        console.log("Conexión establecida en: " + db.connection.name); 
    } catch (error) {
        console.error(error); 
    }
})(); 
