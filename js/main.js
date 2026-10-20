const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
}

const filterButtons = document.querySelectorAll(".filters button");
const looks = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");

    looks.forEach((look) => {
      const match = category === "all" || look.dataset.category === category;
      look.hidden = !match;
    });
  });
});
