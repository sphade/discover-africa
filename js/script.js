let btns = document.querySelectorAll(".btn");
let body = document.querySelector("body");
btns.forEach((btn) => {
  addEventListener("click", (e) => {
    e.preventDefault();
    btn.scrollTo({
      behavior: "smooth",
      top: +1900,
    });
  });
});
