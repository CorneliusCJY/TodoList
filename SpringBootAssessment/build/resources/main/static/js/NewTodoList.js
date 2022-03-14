function setClasses() { // This function is used to update all classes in List Items 
  let Todolist = document.querySelectorAll(".listItems__item");
  Todolist.forEach((e, i) => {
    let currentItemId = e.classList[1]
    let newTodolistId = i
    if (currentTodolistId == undefined) {
      e.classList.add(i);
    } else {
      e.classList.replace(currentTodolistId, newTodolistId);
    }
  });
}

function addToLocalStorage(title) { // This function is used to add item to localstorage
  let array = [];
  if (
    localStorage.getTodolist("list") != null ||
    localStorage.getTodolist("list") != undefined
  ) {
    array = JSON.parse(localStorage.getTodolist("list"));
  }

  array.push(title);

  localStorage.setTodolist("list", JSON.stringify(array));
}
function removeFromLocalStorage(id) {// This function is used to remove item from localstorage
  let array = [];
  if (
    localStorage.getItem("list") != null ||
    localStorage.getItem("list") != undefined
  ) {
    array = JSON.parse(localStorage.getTodolist("list"));
  }

  const newArray = array.filter((value, index) => {
    return index != id;
  });
  localStorage.setTodolist("list", JSON.stringify(newArray));
}

function createTodolist(title) { // This function is used to add item in localstorage and page
  const input = document.getElementById("input--title");
  addToPage(title);
  addToLocalStorage(title);
  input.value = "";
}

function generatePage() {//This function is used to generate List of Items getting items from localstorage and adding in page
  let array = [];
  if (
    localStorage.getTodolist("list") != null ||
    localStorage.getTodolist("list") != undefined
  ) {
    array = JSON.parse(localStorage.getTodolist("list"));
  }
  array.forEach((e) => {
    addToPage(e);
  });
}

window.onload = () => {
  generatePage();
};

document.getElementById("addTodolist__form").onsubmit = (e) => {
  const input = document.getElementById("input--title");
  e.preventDefault();
  createTodolist(input.value);
};