document.querySelector(".year").textContent = new Date().getFullYear();
const headerEl = document.querySelector(".header");

document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
    if (href === "#") {
      // Scroll back to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Scroll to sections
    if (href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Sticky navigation
const observer = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    // How much of the observed element is in the view port
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(document.querySelector(".section-hero"));

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
