//collect data from the user and send to server

const form = document.getElementById("form-container");
const taskContainer = document.getElementById("task-container");

//Add a submit event to the DOM

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  fetch("https://week5groupassignment.onrender.com/add-goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  form.reset();
  alert("Task successfully added");
}

async function getTaskList() {
  const response = await fetch(
    "https://week5groupassignment.onrender.com/goals"
  );

  const getTask = await response.json();
  console.log(getTask);

  const listOfTasks = document.getElementById("task-container");

  for (let i = 0; i < getTask.length; i++) {
    //create an HTML element 5 elements
    const taskName = document.createElement("p");
    const startTime = document.createElement("p");
    const stopTime = document.createElement("p");
    const taskDetails = document.createElement("p");
    const priority = document.createElement("p");
    console.log(getTask[i]);
    //update the text content of the 5 elements
    taskName.textContent = getTask[i].taskName;
    taskName.style.color = "blue";
    taskName.style.marginTop = "15px";
    startTime.textContent = getTask[i].startTime;
    stopTime.textContent = getTask[i].stopTime;
    taskDetails.textContent = getTask[i].taskDetails;
    priority.textContent = getTask[i].priority;

    //append the 5 elements on the dom
    listOfTasks.appendChild(taskName);
    listOfTasks.appendChild(startTime);
    listOfTasks.appendChild(stopTime);
    listOfTasks.appendChild(taskDetails);
    listOfTasks.appendChild(priority);

    //refresh the form element
  }
}
getTaskList();
