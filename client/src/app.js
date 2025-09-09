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
}

// const data = response.json();
// alert("Task successfully added");
// form.reset();
//displayGoals();
