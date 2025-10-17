const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { pool, initDB } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// GET /tasks
app.get('/tasks', async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks ORDER BY id ASC;');
    res.status(200).json(rows);
  } catch (err) {
    console.error(err); res.status(500).json({ error: 'Error fetching tasks' });
  }
});

// POST /tasks
app.post('/tasks', async (req, res) => {
  try {
    const title = (req.body.title || '').trim();
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const { rows } = await pool.query(
      'INSERT INTO tasks (title) VALUES ($1) RETURNING *;',
      [title]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err); res.status(500).json({ error: 'Error creating task' });
  }
});

// PUT /tasks/:id
app.put('/tasks/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const completed = Boolean(req.body.completed);
    const { rows } = await pool.query(
      'UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *;',
      [completed, id]
    );
    if (!rows[0]) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err); res.status(500).json({ error: 'Error updating task' });
  }
});

// DELETE /tasks/:id
app.delete('/tasks/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const r = await pool.query('DELETE FROM tasks WHERE id = $1;', [id]);
    if (r.rowCount === 0) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    console.error(err); res.status(500).json({ error: 'Error deleting task' });
  }
});

const PORT = Number(process.env.PORT || 3000);
initDB()
  .then(() => app.listen(PORT, () => console.log(`API running on port ${PORT}`)))
  .catch((e) => { console.error('DB init error:', e); process.exit(1); });
