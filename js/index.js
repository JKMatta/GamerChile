const dropBtn = document.querySelector("span");
const list = document.querySelectorAll("li");


dropBtn.addEventListener("click", function() {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle("drop");
  }
});