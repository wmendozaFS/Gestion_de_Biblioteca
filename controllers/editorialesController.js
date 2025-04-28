
const pool = require('../db/conexion');

// Listar todas las editoriales
exports.getAllEditoriales = async (req, res) => {
  const [editoriales] = await pool.query('SELECT * FROM editoriales');
  res.render('editoriales', { editoriales });
};

// Crear nueva editorial
exports.createEditorial = async (req, res) => {
  const { nombre } = req.body;
  await pool.query('INSERT INTO editoriales (nombre) VALUES (?)', [nombre]);
  res.redirect('/editoriales');
};

// Eliminar editorial
exports.deleteEditorial = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM editoriales WHERE id = ?', [id]);
  res.redirect('/editoriales');
};
