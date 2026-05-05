// Get form
const form = document.getElementById("taskForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const title = document.getElementById("title").value;
    const deadline = document.getElementById("deadline").value;
    const priority = document.getElementById("priority").value;

    // Create task object
    const task = {
      title,
      deadline,
      priority,
      completed: false,
    };

    // Get existing tasks
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add new task
    tasks.push(task);

    // Save back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task added successfully!");

    form.reset();
  });
}

// ONLY RUN THIS ON tasks.html
if (document.getElementById("taskList")) {
  displayTasks();
}

function displayTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks yet. Add one!</p>";
    return;
  }

  //Existing loop
  tasks.forEach((task, index) => {
    let taskItem = document.createElement("div");

    // Style based on completion
    taskItem.classList.add("task-item");

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>Deadline: ${task.deadline}</p>
      <p>Priority: ${task.priority}</p>

      <button onclick="toggleComplete(${index})">
        ${task.completed ? "Undo" : "Complete"}
      </button>

      <button class="delete-btn" onclick="deleteTask(${index})">
  Delete
</button>
    `;

    taskList.appendChild(taskItem);
  });
}

function toggleComplete(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks[index].completed = !tasks[index].completed;

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

document.addEventListener("DOMContentLoaded", function () {
  // Only run on index.html
  if (document.getElementById("taskCount")) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let totalTasks = tasks.length;

    let completedTasks = tasks.filter((task) => task.completed).length;

    let progress =
      totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    // Update values on page
    document.getElementById("taskCount").textContent = totalTasks;
    document.getElementById("completedCount").textContent = completedTasks;
    document.getElementById("progress").textContent = progress + "%";
  }
});
