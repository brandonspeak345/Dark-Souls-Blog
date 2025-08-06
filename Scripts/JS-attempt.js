function searchNow(event) {
  event.preventDefault();

  const searchValue = document.getElementById("searchInput").value.trim();
  const status = document.getElementById("searchStatus");

  if (searchValue) {
    status.style.display = "inline-flex"; // show it inline beside the button

    setTimeout(() => {
      alert("You searched for: " + searchValue);
      status.style.display = "none";
    }, 1500);
  } else {
    alert("Please enter a search term.");
  }
}
// Select all carousel images with tooltips
const imgs = document.querySelectorAll(
  '#carouselExample img[data-bs-toggle="tooltip"]'
);

imgs.forEach((img) => {
  new bootstrap.Tooltip(img, {
    container: "#carouselExample", // keep tooltip within carousel
    animation: true,
    customClass: "dark-souls-tooltip", // our parchment style
  });
});
function searchNow(event) {
  event.preventDefault(); // stop the page from reloading

  const searchValue = document.getElementById("searchInput").value;
  alert("You searched for: " + searchValue);
}
const footer = document.querySelector("footer");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              footer.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(footer);
