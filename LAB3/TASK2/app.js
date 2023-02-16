const newItemInput = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
  const newItem = newItemInput.value;
  if (newItem === "") {
    return;
  }

  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", function() {
    listItem.classList.toggle("completed");
  });

  const label = document.createElement("label");
  label.innerHTML = newItem;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function() {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  newItemInput.value = "";
});