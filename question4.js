// Task model (as an array to simulate a database)
let tasks = [];
let idCounter = 1;

// Function to add a new task
function addTask(name, description) {
    const newTask = {
        id: idCounter++,
        name: name,
        description: description
    };
    tasks.push(newTask);
    console.log("Task added:", newTask);
}


// Function to view all tasks
function viewTasks() {
    console.log("All Task:");
    tasks.forEach(task => console.log(task));
}

// Function to update a task by ID
function updateTask(id, newName, newDescription) {
    const task = task.find(task => task.id === id);
    if (task) {
        task.name = newName || task.name;
        task.description = newDescription || task.description;
        console.log("task Updated:", task);
    } else {
        console.log(`Task with ID ${id} not found`);
    }
}

// Function to delete a task by ID
function deletedTask(id) {
    const deletedTask = tasks.splice(taskIndex, 1);
    if (taskIndex != -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        console.log("Task deleted:", deletedTask[0]);
    }else {
        console.log(`task with ID ${id} not found`);
    }
}


