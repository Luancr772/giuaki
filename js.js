const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("Logged in successfully");
});

const toggle = document.querySelector(".icon");

toggle.addEventListener("click", function () {
  const input = this.previousElementSibling;
  const inputType = input.getAttribute("type");
  if (inputType === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
