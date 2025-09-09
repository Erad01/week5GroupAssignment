//collect data from the user and send to server

const form = document.getElementById("form-container");

//Add a submit event to the DOM

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const formValues = Object.fromEntries(formData);

    console.log(formValues)

    const response = await fetch("https://week5groupassignment.onrender.com/add-goals",
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({formValues})

        }
    );

    const data = await response.json()
    alert("Task successfully added");
    form.reset();
    //displayGoals();

})