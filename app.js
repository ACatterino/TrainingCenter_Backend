const express = require("express");
const cors = require("cors");
require("dotenv").config(); //para uso de variables e entorno
const bodyParser = require("body-parser");


const usuarioRoutes = require("./routes/usuarioRoutes");
const rutinaRoutes = require("./routes/rutinaRoutes");
const mensajeRoutes = require("./routes/mensajeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT||3001;

app.use(bodyParser.json());
app.use("/usuarios", usuarioRoutes);
app.use("/rutinas", rutinaRoutes);
app.use("/mensajes", mensajeRoutes);
app.use("/auth",authRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
