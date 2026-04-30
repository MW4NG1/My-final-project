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

  function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

      let taskItem = document.createElement("div");

      taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p>Deadline: ${task.deadline}</p>
        <p>Priority: ${task.priority}</p>
      `;

      taskList.appendChild(taskItem);
    });
  }
}