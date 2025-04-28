
const pool = require('../db/conexion');

// Mostrar todos los autores
exports.getAllEditoriales = async (req, res) => {
  const [editoriales] = await pool.query('SELECT * FROM editoriales');
  res.render('editoriales', { editoriales });
};

// Crear autor nuevo
exports.createEditorial = async (req, res) => {
  const { nombre } = req.body;
  await pool.query('INSERT INTO editoriales (nombre) VALUES (?)', [nombre]);
  res.redirect('/editoriales');
};

// Eliminar autor
exports.deleteEditorial = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM editoriales WHERE id = ?', [id]);
  res.redirect('/editoriales');
};

// Mostrar formulario con datos del autor
exports.editEditorialForm = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM editoriales WHERE id = ?', [id]);

  if (result.length === 0) return res.send('Editorial no encontrado');

  res.render('editarEditorial', { editorial: result[0] });
};

// Guardar los cambios editados
exports.updateEditorial = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  await pool.query(
    'UPDATE editoriales SET nombre = ? WHERE id = ?',
    [nombre, id]
  );

  res.redirect('/editoriales');
};