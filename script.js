const modeToggleBtn = document.getElementById("mode-toggle-btn");
const body = document.body;

modeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const likeBtns = document.querySelectorAll(".like-btn");

likeBtns.forEach((btn) => {
  let isLiked = false;

  btn.addEventListener("click", () => {
    if (!isLiked) {
      btn.style.color = "red";
      isLiked = true;
    } else {
      btn.style.color = "black";
      isLiked = false;
    }
  });
});
