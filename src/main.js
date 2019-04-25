window.onload = init;

function init() {
  document.querySelector("#get").addEventListener("click", getTodos);
  document.querySelector("#post").addEventListener("click", postTodo);
  document.querySelector("#put").addEventListener("click", updateThirdTodo);
}

function getTodos(event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/todos");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = handleData;
  xhr.send();
}

function postTodo(event) {
  event.preventDefault();
  const userInput = document.querySelector('#todo-input').value;
  //value grabbed

  const newTodo = {
    text: "Profit",
    completed: false
  };
  newTodo.text = userInput;

  const jsonnedTodo = JSON.stringify(newTodo);
  document.querySelector('#todo-input').value = '';
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/todos");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = handleData;
  xhr.send(jsonnedTodo);
}

function updateThirdTodo(event) {
  const updatedTodo = {
    text: "????",
    completed: true
  };
  const jsonnedTodo = JSON.stringify(updatedTodo);

  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "http://localhost:3000/todos/3");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = handleData;
  xhr.send(jsonnedTodo);
}

function handleData(event, value) {
  const todos = JSON.parse(event.target.responseText);
  console.log(todos)
  Object.entries(value);


}
