const pool = require('../db/conexion');

// Mostrar todos los empleados
exports.getEmpleados = async (req, res) => {
  const [empleados] = await pool.query('SELECT * FROM empleados');
  res.render('empleados', { empleados , empleado:{}, action:'/empleados/crear'});
};

// Crear empleado nuevo
exports.createEmpleado = async (req, res) => {
  const { dni, nombre, email } = req.body;
  await pool.query('INSERT INTO empleados (dni, nombre, email, ) VALUES (?, ?, ?)', [dni, nombre, email]);
  res.redirect('/empleados');
};

// Eliminar usuario
exports.deleteEmpleado = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [id]);
  res.redirect('/empleados');
};
// editar usuario
exports.editarEmpleado = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
  res.render('empleados',{empleados:{},empleado: result[0], action:`/empleados/actualizar/${id}`})
};

// editar usuario
exports.actualizarEmpleado = async (req, res) => {
  const { id } = req.params;
  const { dni, nombre, email } = req.body;

  await pool.query('UPDATE empleados SET dni=?, nombre=?, email=? WHERE id_empleado = ?', [dni, nombre, email,id]);
  res.redirect('/empleados');
};