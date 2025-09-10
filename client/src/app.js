//collect data from the user and send to server

const form = document.getElementById("form-container");
const taskContainer = document.getElementById("task-container");
let allGoals = [];

let showingCompleted = false;

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
  displayGoals();
}

async function displayGoals() {
  const response = await fetch(
    "https://week5groupassignment.onrender.com/goals"
  );
  allGoals = await response.json();


  //clear old tasks
  taskContainer.innerHTML = "<h1>Tasks</h1>";

  allGoals.forEach((goal) => {
    const div = document.createElement("div");
    div.classList.add("goal-entry");
    div.innerHTML = `
    <input type = "checkbox" class = "task-checkbox" ${goal.completed ? "checked" : ""}/>
    <div class = "task-content">
    
    <h3>${goal.name}</h3>
    <p><strong>From:</strong>${goal.fromtime}</p>
    <p><strong>To:</strong> ${goal.totime}</p>
      <p><strong>Details:</strong> ${goal.details}</p>
      <p><strong>Priority:</strong> ${goal.priority}</p>
      </div>
      <hr> 
      `;
    const checkbox = div.querySelector(".task-checkbox");
    const content = div.querySelector(".task-content");
    if(goal.completed)content.classList.add("completed")

      checkbox.addEventListener("change",() =>{
        content.classList.toggle("completed", checkbox.checked);
        goal.completed = checkbox.checked;
        if(showingCompleted && !checkbox.checked){
          taskContainer.removeChild(div);
        }
      })

    taskContainer.appendChild(div);
  });

}

//load tasks when the page opens
document.addEventListener("DOMContentLoaded", displayGoals);

