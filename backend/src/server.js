const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get("/", (req, res) => {
  res.json({
    message: "API de PetMatch funcionando correctamente"
  });
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({
      status: "ok",
      database: "connected"
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
    res.status(503).json({
      status: "error",
      database: "disconnected"
    });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`PetMatch API escuchando en el puerto ${port}`);
});