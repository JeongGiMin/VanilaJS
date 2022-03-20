const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let maintainedTodo = [];

function pushTodoToLocalStorage() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(maintainedTodo));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  maintainedTodo = maintainedTodo.filter((toDo) => toDo.id !== parseInt(li.id));
  pushTodoToLocalStorage();
}

function showTodoList(saveTheTodo) {
  const li = document.createElement("li");
  li.id = saveTheTodo.id;
  const span = document.createElement("span");
  span.innerHTML = saveTheTodo.text;
  const btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const saveTheTodo = todoInput.value;
  todoInput.value = "";
  const saveTheTodoOj = {
    text: saveTheTodo,
    id: Date.now(),
  };
  maintainedTodo.push(saveTheTodoOj);
  showTodoList(saveTheTodoOj);
  pushTodoToLocalStorage();
}

todoForm.addEventListener("submit", todoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  maintainedTodo = parsedToDos;
  parsedToDos.forEach(showTodoList);
}
