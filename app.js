const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const alumnoRoutes = require("./routes/alumnoRoutes");
// const planRoutes = require('./routes/planRoutes');
const inscripcionRoutes = require("./routes/inscripcionRoutes");
const db = require("./db"); // Configuración de la conexión a la base de datos

const app = express();
const port = 3000;

app.use(bodyParser.json());
// app.use(cors);

// Rutas
app.use("/api", alumnoRoutes);
// app.use('/api', planRoutes);
app.use("/api", inscripcionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
