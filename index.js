const taskForm = document.getElementById("form");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("tasks");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (taskInput.value === "") return alert("Please add some text to the task ");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("tasks");

  const taskContent = document.createElement("div");
  taskContent.classList.add("content");

  const taskText = document.createElement("input");
  taskText.setAttribute("type", "text");
  taskText.classList.add("text");
  taskText.value = taskInput.value;
  taskText.readOnly = true;

  taskContent.appendChild(taskText);
  taskDiv.appendChild(taskContent);

  const taskActions = document.createElement("div");
  taskActions.classList.add("actions");

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    if (taskText.readOnly) {
      taskText.readOnly = false;
      editButton.textContent = "Save";
      taskText.focus();
    } else {
      if (taskText.value === "") {
        alert("Please add some text to the task before saving.");
      } else {
        taskText.readOnly = true;
        editButton.textContent = "Edit";
      }
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskDiv);
  });

  taskActions.appendChild(editButton);
  taskActions.appendChild(deleteButton);
  taskDiv.appendChild(taskActions);

  taskList.appendChild(taskDiv);

  taskInput.value = "";
});
