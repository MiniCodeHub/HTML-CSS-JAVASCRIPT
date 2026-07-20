const attendanceBtn = document.getElementById("attendanceBtn");
const registerBtn = document.getElementById("registerBtn");

const attendanceForm = document.querySelector(".attendance");
const registerForm = document.querySelector(".register-form");

attendanceBtn.addEventListener("click", () => {
    attendanceForm.classList.add("activeForm");
    registerForm.classList.remove("activeForm");

    attendanceBtn.classList.add("active");
    registerBtn.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
    registerForm.classList.add("activeForm");
    attendanceForm.classList.remove("activeForm");

    registerBtn.classList.add("active");
    attendanceBtn.classList.remove("active");
});