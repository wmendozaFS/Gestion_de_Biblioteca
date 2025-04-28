const pool = require('../db/conexion');

// Listar préstamos con libros y usuarios
exports.getAllPrestamos = async (req, res) => {
  const [prestamos] = await pool.query(`
    SELECT prestamos.*, usuarios.nombre AS usuario, libros.titulo AS libro
    FROM prestamos
    LEFT JOIN usuarios ON prestamos.usuario_id = usuarios.id
    LEFT JOIN libros ON prestamos.libro_id = libros.id
  `);

  const [usuarios] = await pool.query('SELECT * FROM usuarios');
  const [libros] = await pool.query('SELECT * FROM libros');

  res.render('prestamos', { prestamos, usuarios, libros });
};

// Crear préstamo
exports.createPrestamo = async (req, res) => {
    let { usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = req.body;
  
    fecha_prestamo = fecha_prestamo || null;
    fecha_devolucion = fecha_devolucion || null;
  
    // Solo la fecha de préstamo es obligatoria
    if (!fecha_prestamo) {
      return res.status(400).send('La fecha de préstamo es obligatoria.');
    }
  
    await pool.query(
      `INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion)
       VALUES (?, ?, ?, ?)`,
      [
        usuario_id, 
        libro_id, 
        fecha_prestamo, 
        fecha_devolucion === '' ? null : fecha_devolucion
      ]
    );
  
    res.redirect('/prestamos');
  };
  

// Borrar préstamo
exports.deletePrestamo = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM prestamos WHERE id = ?', [id]);
  res.redirect('/prestamos');
};


exports.devolverPrestamo = async (req, res) => {
  const { id } = req.params;
  const hoy = new Date().toISOString().split('T')[0];

  await pool.query(
    'UPDATE prestamos SET fecha_devolucion = ? WHERE id = ?',
    [hoy, id]
  );

  res.redirect('/prestamos');
};
