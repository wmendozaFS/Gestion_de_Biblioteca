const pool = require('../db/conexion');

// Mostrar todos los usuarios
exports.getAllUsuarios = async (req, res) => {
  const [usuarios] = await pool.query('SELECT * FROM usuarios');
  res.render('usuarios', { usuarios , usuario:{}, action:'/usuarios/crear'});
};

// Crear usuario nuevo
exports.createUsuario = async (req, res) => {
  const { nombre, email } = req.body;
  await pool.query('INSERT INTO usuarios (nombre, email) VALUES (?, ?)', [nombre, email]);
  res.redirect('/usuarios');
};

// Eliminar usuario
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
  res.redirect('/usuarios');
};
// editar usuario
exports.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
  res.render('usuarios',{usuarios:{},usuario: result[0], action:`/usuarios/actualizar/${id}`})
};

// editar usuario
exports.actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;

  await pool.query('UPDATE usuarios SET nombre=?, email=? WHERE id = ?', [nombre, email,id]);
  res.redirect('/usuarios');
};