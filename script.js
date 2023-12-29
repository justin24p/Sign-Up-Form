let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let focusOnPassword = false;
// password match checker
password.addEventListener("focus", () => {
    focusOnPassword = true;
});
confirmPassword.addEventListener("focus", () => {
    focusOnPassword = true;
});
setInterval(() => {
    if (
        focusOnPassword &&
        confirmPassword.value.length > 1 &&
        password.value.length > 1
    ) {
        let result = passwordMatch(confirmPassword.value, password.value);
        console.log(result);
        PasswordBorderColor(result);
    }
});
function passwordMatch(password, confirmPassword) {
    if (password === confirmPassword) {
        return true;
    } else {
        return false;
    }
}
function PasswordBorderColor(result) {
    if (result === true) {
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
        password.style.boxShadow = "0 0 5px green";
        confirmPassword.style.boxShadow = "0 0 5px green";
    } else {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        password.style.boxShadow = "0 0 5px red";
        confirmPassword.style.boxShadow = "0 0 5px red";
    }
}
