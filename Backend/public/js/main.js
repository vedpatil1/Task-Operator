const all = document.getElementById('all');

let list = []
// We are getting our tasks from the server to display them
fetch('http://localhost:5050')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(task => {
        list = task
        taskList.innerHTML = "";
        displayAll()
    })


function displayAll() {
    taskList.innerHTML = "";
    const activeT = list.filter(task => !task.isCompleted);
    const tasksLeft = document.querySelector('.tasksLeft')
    tasksLeft.innerText = `${activeT.length} task left`;

    list.forEach(task => {
        const node = document.createElement("LI");

        const buttonAll = document.getElementById('all');
        buttonAll.classList.add('active');

        const checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkBoxes");
        checkBox.setAttribute("id", `${task.id}`);
        checkBox.checked = task.isCompleted

        const span = document.createElement("SPAN");
        span.setAttribute("id", `${task.id} span`);
        span.textContent = task.content;

        const button = document.createElement("BUTTON");
        button.setAttribute("class", "deleteTask");
        button.setAttribute("id", task.id)
        button.innerText = 'X';

        node.setAttribute('id', "tasks");
        node.append(checkBox);
        node.append(span)
        node.append(button)

        taskList.appendChild(node);

    });
}

