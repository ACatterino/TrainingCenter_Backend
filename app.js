const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const alumnoRoutes = require("./routes/alumnoRoutes");
// const planRoutes = require('./routes/planRoutes');
const inscripcionRoutes = require("./routes/inscripcionRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const rutinaRoutes = require("./routes/rutinaRoutes");
const mensajeRoutes = require("./routes/mensajeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT||3001;

app.use(bodyParser.json());
// app.use(cors);

// Rutas
//app.use("/api", alumnoRoutes);
// app.use('/api', planRoutes);
//app.use("/api", inscripcionRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/rutinas", rutinaRoutes);
app.use("/mensajes", mensajeRoutes);
app.use("/auth",authRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
