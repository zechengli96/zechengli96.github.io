const form = document.getElementById("feedback-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = form.elements["message"].value;
  const rating = form.elements["rating"].value;
  const email = form.elements["email"].value;

  // Calculate number of words in message
  const words = message.split(" ").filter((word) => word.length > 0);
  const numWords = words.length;

  // Check if email is valid
  const emailRegex = /^\S+@\S+\.\S+$/;
  const isValidEmail = emailRegex.test(email);

  // Show alert with results
  let alertMsg = `You entered ${numWords} words. `;
  if (!isValidEmail) {
    alertMsg += "Email format is invalid. ";
  }
  alertMsg += `You rated ${rating} stars.`;
  alert(alertMsg);

  // Reset the form
  form.reset();
});

const modeToggleBtn = document.getElementById("mode-toggle-btn");
const body = document.body;

modeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const likeButton = document.getElementById("like-button");
let likeCount = 0;

likeButton.addEventListener("click", () => {
  likeCount++;
  likeButton.innerText = `Like (${likeCount})`;
});

const dropdownBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropbtn")) {
    dropdownContent.classList.remove("show");
  }
});
