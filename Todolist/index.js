const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {

    const tasksInput = document.getElementById("tasksInput");
    
    const addTasks = tasksInput.value;

    const addTaskLi = document.createElement("li");
    
    addTaskLi.innerHTML = addTasks;

    taskList.appendChild(addTaskLi);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerHTML = "Delete"

    addTaskLi.appendChild(deleteTaskButton);

    deleteTaskButton.addEventListener("click", () => {
        taskList.removeChild(addTaskLi)
    });

});