document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Here you can perform validation or further processing of the form data

    // For demonstration, let's log the form data to the console
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
  });
