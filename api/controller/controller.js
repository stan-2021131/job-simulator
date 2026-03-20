import { pool } from "../db.js";

function validacion(body) {
  const { campo1, campo2, campo3, campo4, campo5, campo6 } = body;

  if (
    campo1 === undefined ||
    campo2 === undefined ||
    campo3 === undefined ||
    campo4 === undefined ||
    campo5 === undefined ||
    campo6 === undefined
  )
    return "Todos los campos son requeridos";

  if (typeof campo1 !== "string") return "campo1 debe ser string";
  if (typeof campo2 !== "string") return "campo2 debe ser string";
  if (typeof campo3 !== "string") return "campo3 debe ser string";
  if (!Number.isInteger(campo4)) return "campo4 debe ser integer";
  if (typeof campo5 !== "number") return "campo5 debe ser float";
  if (typeof campo6 !== "boolean") return "campo6 debe ser boolean";

  return null;
}
function validarParcial(body) {
  for (const key in body) {
    const value = body[key];

    if (key === "campo1" && typeof value !== "string")
      return "campo1 debe ser string";

    if (key === "campo2" && typeof value !== "string")
      return "campo2 debe ser string";

    if (key === "campo3" && typeof value !== "string")
      return "campo3 debe ser string";

    if (key === "campo4" && !Number.isInteger(value))
      return "campo4 debe ser integer";

    if (key === "campo5" && typeof value !== "number")
      return "campo5 debe ser float";

    if (key === "campo6" && typeof value !== "boolean")
      return "campo6 debe ser boolean";
  }

  return null;
}

export const obtenerVideojuegos = async (req, res) => {
  const result = await pool.query("SELECT * FROM videojuegos");
  res.json(result.rows);
};

export const obtenerXId = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query("SELECT * FROM videojuegos WHERE id=$1", [
    id,
  ]);
  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Videojuego no encontrado" });
  }
  res.json(result.rows[0]);
};

export const nuevoVideojuego = async (req, res) => {
  const error = validacion(req.body);
  if (error) return res.status(400).json({ error });

  const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

  const result = await pool.query(
    `INSERT INTO videojuegos (campo1, campo2, campo3, campo4, campo5, campo6)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [campo1, campo2, campo3, campo4, campo5, campo6],
  );

  res.status(201).json(result.rows[0]);
};

export const actualizarVideojuego = async (req, res) => {
  const error = validacion(req.body);
  if (error) return res.status(400).json({ error });
  const id = req.params.id;

  const { campo1, campo2, campo3, campo4, campo5, campo6 } = req.body;

  const result = await pool.query(
    `UPDATE videojuegos
     SET campo1=$1, campo2=$2, campo3=$3, campo4=$4, campo5=$5, campo6=$6
     WHERE id=$7 RETURNING *`,
    [campo1, campo2, campo3, campo4, campo5, campo6, id],
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Videojuego no encontrado" });
  }

  res.json(result.rows[0]);
};

export const eliminarVideojuego = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query(
    "DELETE FROM videojuegos WHERE id=$1 RETURNING *",
    [id],
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Videojuego no encontrado" });
  }

  res.status(204).send();
};

export const patch = async (req, res) => {
  const campos = req.body;
  const id = req.params.id;

  if (!campos || Object.keys(campos).length === 0) {
    return res.status(400).json({ error: "No se ingresaron campos a cambiar" });
  }

  const error = validarParcial(campos);
  if (error) return res.status(400).json({ error });

  const llaves = Object.keys(campos);
  const valores = Object.values(campos);

  const setQuery = llaves.map((key, i) => `${key}=$${i + 1}`).join(", ");

  const result = await pool.query(
    `UPDATE videojuegos SET ${setQuery} WHERE id=$${llaves.length + 1} RETURNING *`,
    [...valores, id],
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(result.rows[0]);
};