function getFormvalue(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from input fields
    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();

    // Check for empty fields
    if (firstName === "" || lastName === "") {
        alert("Please enter both first and last name.");
        return;
    }

    // Display the full name
    alert(`${firstName} ${lastName}`);
}

// Attach the function to the form submission event
document.getElementById("form1").addEventListener("submit", getFormvalue);
