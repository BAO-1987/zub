
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".tabs__panel")) {
    let t = 12;
    const e = document.querySelector(".btn--show-more"),
      o = document.querySelectorAll("li").length;
    e.addEventListener("click", c => {
      t += 4;
      const r = Array.from(document.querySelector(".gallery__list").children).slice(0, t);
      r.forEach(t => t.classList.add("is-visible")), r.length === o && (e.style.display = "none")
    })
  }
});


