document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (taskInput.value.trim() === "") {
      alert("You must enter a task!");
      return;
    }
    const task = document.createElement("li");
    task.innerText = taskInput.value;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
      task.remove();
    });
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    taskInput.value = "";
  });
});
