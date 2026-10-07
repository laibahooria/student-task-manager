console.log("Student Task Manager loaded.");

const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const addTaskButton = document.getElementById("add-task");
const taskSearch = document.getElementById("task-search");
const taskList = document.getElementById("task-list");

let tasks = [];

// Add a new task
addTaskButton.addEventListener("click", function () {
    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "") {
        alert("Please enter a task title.");
        return;
    }

    tasks.push({
        title: title,
        description: description
    });

    taskTitle.value = "";
    taskDescription.value = "";

    displayTasks(tasks);
});

// Display tasks
function displayTasks(taskArray) {
    taskList.innerHTML = "";

    if (taskArray.length === 0) {
        taskList.innerHTML = "<p>No tasks found.</p>";
        return;
    }

    taskArray.forEach(function (task) {
        const taskItem = document.createElement("div");

        taskItem.className = "task-item";

        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        `;

        taskList.appendChild(taskItem);
    });
}

// Search tasks by title or description
taskSearch.addEventListener("input", function () {
    const searchTerm = taskSearch.value.toLowerCase().trim();

    const filteredTasks = tasks.filter(function (task) {
        const title = task.title.toLowerCase();
        const description = task.description.toLowerCase();

        return (
            title.includes(searchTerm) ||
            description.includes(searchTerm)
        );
    });

    displayTasks(filteredTasks);
});