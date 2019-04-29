window.onload = init;

function init() {
  document.querySelector("#get").addEventListener("click", getTodos);
  document.querySelector("#post").addEventListener("click", postTodo);
  document.querySelector("#put").addEventListener("click", completeTodo);
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
  const userInput = document.querySelector("#todo-input").value;
  //value grabbed

  const newTodo = {
    text: "Profit",
    completed: false
  };
  newTodo.text = userInput;
  

  const jsonnedTodo = JSON.stringify(newTodo);
  document.querySelector("#todo-input").value = "";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/todos");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = getTodos;
  xhr.send(jsonnedTodo);
 
}

function completeTodo(event) {
  document.querySelector()
  const updatedTodo = {
    text: "????",
    completed: true
  };
  //this.style.textDecoration = 'line-through'
  

  const jsonnedTodo = JSON.stringify(updatedTodo);

  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "http://localhost:3000/todos/3");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = handleData;
  xhr.send(jsonnedTodo);
}

function handleData(event) {
  const todos = JSON.parse(event.target.responseText);
  console.log(todos)
  clearUl();
  appendToUl(todos);
}
function appendToUl(value) {
    value.forEach( data => {
    const li = document.createElement("li");
    const ul = document.querySelector("ul");
    li.innerText = data.text;
    ul.appendChild(li);
  });
}
function clearUl(){
  const ul = document.querySelector('ul')
  while (ul.hasChildNodes()){
    ul.firstChild.remove();
  }
}

//need to create eventlistener for li 
//apply strikethrough when clicked