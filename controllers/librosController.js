const pool = require('../db/conexion');

// Mostrar todos los libros con autores y editoriales
exports.getAllLibros = async (req, res) => {
  const [libros] = await pool.query(`
    SELECT libros.*, autores.nombre AS autor, editoriales.nombre AS editorial
    FROM libros
    LEFT JOIN autores ON libros.autor_id = autores.id
    LEFT JOIN editoriales ON libros.editorial_id = editoriales.id
  `);

  const [autores] = await pool.query('SELECT * FROM autores');
  const [editoriales] = await pool.query('SELECT * FROM editoriales');

  res.render('libros', { libros, autores, editoriales });
};

// Crear libro
exports.createLibro = async (req, res) => {
  const { titulo, autor_id, editorial_id } = req.body;
  await pool.query('INSERT INTO libros (titulo, autor_id, editorial_id) VALUES (?, ?, ?)', [titulo, autor_id, editorial_id]);
  res.redirect('/libros');
};

// Borrar libro
exports.deleteLibro = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM libros WHERE id = ?', [id]);
  res.redirect('/libros');
};
