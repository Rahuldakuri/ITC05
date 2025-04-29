function sanitize(input) {
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
}

function validateForm() {
    let firstName = sanitize(document.forms["regForm"]["firstName"].value);
    let lastName = sanitize(document.forms["regForm"]["lastName"].value);
    let email = sanitize(document.forms["regForm"]["email"].value);
    let password = sanitize(document.forms["regForm"]["password"].value);
    let confirmPassword = sanitize(document.forms["regForm"]["confirmPassword"].value);

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields must be filled out.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}
