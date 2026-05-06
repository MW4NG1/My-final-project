//Keeps track of which filter is active
let currentFilter = "all";

// Get form
const form = document.getElementById("taskForm");

//Runs only when on add-task.html
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
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

    // Get existing tasks from local storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add new task to the array
    tasks.push(task);

    // Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task added successfully!");

    //Clears the form
    form.reset();
  });
}

// Only runs if in tasks.html
if (document.getElementById("taskList")) {
  displayTasks();
}

function displayTasks() {
  //Get tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; //Clear previous tasks

  //If no tasks exist
  if (tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks yet. Add one!</p>";
    return;
  }

  //Filter tasks based on selected filter
  let filteredTasks = tasks.filter((task) => {
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "pending") return !task.completed;
    return true;
  });

  //Loop through tasks and display them
  filteredTasks.forEach((task) => {
    let index = tasks.indexOf(task);
    let taskItem = document.createElement("div");

    // Add styling class
    taskItem.classList.add("task-item");

    //If task is completed, add special styling
    if (task.completed) {
      taskItem.classList.add("completed");
    }

    //Insert task content
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

    //Add task to page
    taskList.appendChild(taskItem);
  });
}

function toggleComplete(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //Switch completed true or false
  tasks[index].completed = !tasks[index].completed;

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //Remove task at given index
  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks(); //Refresh UI
}

document.addEventListener("DOMContentLoaded", function () {
  // Only run if stats are in index.html
  if (document.getElementById("taskCount")) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let totalTasks = tasks.length;

    //Count completed tasks
    let completedTasks = tasks.filter((task) => task.completed).length;

    //Calculate progress percentage
    let progress =
      totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    // Update values on page
    document.getElementById("taskCount").textContent = totalTasks;
    document.getElementById("completedCount").textContent = completedTasks;
    document.getElementById("progress").textContent = progress + "%";

    //Animate progress bar
    setTimeout(() => {
      document.getElementById("progressFill").style.width = progress + "%";
    }, 200);
  }
});

//Change filter and refresh task list
function filterTasks(type) {
  currentFilter = type;
  displayTasks();
}
