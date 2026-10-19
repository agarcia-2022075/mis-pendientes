//Tareas iniciales de ejemplo (mínimo 3 tareas)
let tasks = [
  { id: 1, text: "Comprar víveres para la semana", completed: false },
  { id: 2, text: "Repasar la lección de programación", completed: false },
  { id: 3, text: "Organizar los apuntes de la clase", completed: false },
  { id: 4, text: "Preparar la entrega del mini proyecto", completed: true }
];

//Elementos del DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const statsCounter = document.getElementById('stats-counter');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// Actualizar contador
function updateStats() {
  const pendingCount = tasks.filter(t => !t.completed).length;
  statsCounter.textContent = `${pendingCount} de ${tasks.length} pendientes`;
}

//rwnderizar la lista de tareas
function renderTasks() {
  todoList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'pending') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';

    filteredTasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `todo-item ${task.completed ? 'completed' : ''}`;

      // Contenedor izquierdo: checkbox + texto
      const leftDiv = document.createElement('div');
      leftDiv.className = 'todo-left';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'todo-checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => toggleTask(task.id));

      const span = document.createElement('span');
      span.className = 'todo-text';
      span.textContent = task.text;

      leftDiv.appendChild(checkbox);
      leftDiv.appendChild(span);

      //Botón para eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.title = 'Eliminar tarea';
      deleteBtn.addEventListener('click', () => deleteTask(task.id));

      li.appendChild(leftDiv);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
  }

  updateStats();
}
//Agregar tarea
function addTask(text) {
  const newTask = {
    id: Date.now(),
    text: text.trim(),
    completed: false
  };

  tasks.unshift(newTask);
  renderTasks();
}

//Marcar o desmarcar tarea terminada
function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  renderTasks();
}
//Eliminar tarea
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

//Evento al enviar formulario
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTask(text);
    todoInput.value = '';
    todoInput.focus();
  }
});

//Eventos de los filtros
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderTasks();
  });
});

//Inicialización directa
renderTasks();
