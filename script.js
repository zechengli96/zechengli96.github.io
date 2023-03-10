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

modeToggleBtn.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
});

const likeBtn = document.getElementById("like-btn");

likeBtn.addEventListener("click", () => {
  alert("Thank you for liking this page!");
});

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseenter", () => {
  dropdownContent.style.display = "block";
});

dropdown.addEventListener("mouseleave", () => {
  dropdownContent.style.display = "none";
});
