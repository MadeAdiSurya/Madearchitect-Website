const pickMenu = document.querySelector(".navbar");

document.querySelector("#humberger-menu").onclick = () => {
  pickMenu.classList.toggle("active");
};

//if click every where outside itself, navbar will be closed

const pickHumMenu = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!pickHumMenu.contains(e.target) && !pickMenu.contains(e.target)) {
    pickMenu.classList.remove("active");
  }
});
