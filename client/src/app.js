//collect data from the user and send to server

const form = document.getElementById("form-container");

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
  const goals = await response.json();

  //clear old tasks
  taskContainer.innerHTML = "<h1>Tasks</h1>";

  goals.forEach((goal) => {
    const div = document.createElement("div");
    div.classList.add("goal-entry");
    div.innerHTML = `
    <h3>${goal.name}</h3>
    <p><strong>From:</strong>${goal.fromtime}</p>
    <p><strong>To:</strong> ${goal.totime}</p>
      <p><strong>Details:</strong> ${goal.details}</p>
      <p><strong>Priority:</strong> ${goal.priority}</p>
      <hr> 
      `;
    taskContainer.appendChild(div);
  });
}

//load tasks when the page opens
document.addEventListener("DOMContentLoaded", displayGoals);
