const dot = document.querySelector(".dot");
const allLinks = document.querySelectorAll(".nav__link");

allLinks.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    allLinks.forEach((link) => {
      link.classList.remove("nav__link-active");
    });
    e.target.classList.add("nav__link-active");

    dot.style.cssText = `right: ${
      50 + 100 * e.target.dataset.linkIndex
    }px;transform: translateX(50%);opacity: 1;`;
  });
});

const navLinksContainer = document.querySelector(".nav__links");

document.querySelector(".nav__drop").addEventListener("click", () => {
  if (navLinksContainer.classList.contains("drop-down")) {
    navLinksContainer.classList.remove("drop-down");
  } else {
    navLinksContainer.classList.add("drop-down");
  }
});
