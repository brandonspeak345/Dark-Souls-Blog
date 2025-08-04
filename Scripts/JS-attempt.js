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
