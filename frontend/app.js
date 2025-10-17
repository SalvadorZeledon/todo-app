const API_URL = 'http://localhost:3000';

const els = {
  list: document.getElementById('taskList'),
  input: document.getElementById('newTitle'),
  add: document.getElementById('addBtn')
};

els.add.addEventListener('click', () => {
  const title = els.input.value.trim();
  if (!title) return;
  addTask(title).then(() => {
    els.input.value = '';
    loadTasks();
  });
});

els.input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') els.add.click();
});

async function loadTasks() {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    const tasks = await res.json();
    render(tasks);
  } catch (e) {
    console.error(e);
    els.list.innerHTML = `<li>Error cargando tareas</li>`;
  }
}

async function addTask(title) {
  await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
}

async function toggleTask(id, completed) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
}

async function deleteTask(id) {
  await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
}

function render(tasks) {
  els.list.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    li.className = `task ${t.completed ? 'completed' : ''}`;

    const left = document.createElement('div');
    left.className = 'task__title';

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = !!t.completed;
    cb.addEventListener('change', async () => {
      await toggleTask(t.id, cb.checked);
      loadTasks();
    });

    const label = document.createElement('span');
    label.textContent = t.title;
    label.className = 'task__label';

    left.appendChild(cb);
    left.appendChild(label);

    const del = document.createElement('button');
    del.textContent = 'Eliminar';
    del.className = 'task__delete';
    del.addEventListener('click', async () => {
      await deleteTask(t.id);
      loadTasks();
    });

    li.appendChild(left);
    li.appendChild(del);
    els.list.appendChild(li);
  });
}

loadTasks();

