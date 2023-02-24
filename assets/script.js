let navigationButtonResponsive = document.querySelector(
  ".navigation-responsive"
);
let navItem = document.querySelectorAll(".nav-item");

const showNavigation = (e) => {
  e.preventDefault();
  let navigationHeader = document.querySelector(".navigation");
  navigationHeader.classList.toggle("slide-down");
};

const smoothNavigation = function (e) {
  let linkNav = this.children;
  let linkNavHref = linkNav[0].getAttribute("href");
  let destinationScroll = document.querySelector(linkNavHref);
  let destinationOffset = destinationScroll.offsetTop;

  let offsetMinus = 60;

  window.scrollTo({
    top: destinationOffset - offsetMinus,
    behavior: "smooth",
  });

  e.preventDefault();
};

navigationButtonResponsive.addEventListener("click", showNavigation);
navItem.forEach((nav) => {
  nav.addEventListener("click", smoothNavigation);
});
