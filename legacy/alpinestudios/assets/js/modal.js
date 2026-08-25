function openPreview(page) {
  const darkness = document.getElementById("darkness");

  // Set display to flex but keep opacity 0
  darkness.style.display = "flex";
  darkness.style.opacity = 0;

  // Apply opacity transition with a delay
  setTimeout(() => {
    darkness.style.transition = "opacity 0.5s ease-in-out";
    darkness.style.opacity = 1;
  }, 10); // Small delay to allow display change before transition

  fetch(`assets/modals/${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      let imageContainer = tempDiv.querySelector(".imageContainer");
      let detailsContainer = tempDiv.querySelector(".detailsContainer");
      let scripts = tempDiv.querySelector("#carouselScript");

      if (!imageContainer || !detailsContainer || !scripts) {
        console.error("Error: Missing elements in", page);
        return;
      }

      document.getElementById("imageContainer").innerHTML =
        imageContainer.innerHTML;
      document.getElementById("detailsContainer").innerHTML =
        detailsContainer.innerHTML;
      document.getElementById("carouselScript").innerHTML = scripts.innerHTML;
      document.getElementById("actionButton").dataset.value = page;
    })
    .catch((error) => {
      console.error("Error loading modal:", error);
    });
}
function exitPreview() {
  const darkness = document.getElementById("darkness");
  darkness.style.opacity = 0;
  setTimeout(() => {
    darkness.style.display = "none";
  }, 500); // Matches transition duration
}

function openAbout() {
  const darkness = document.getElementById("about");

  // Set display to flex but keep opacity 0
  darkness.style.display = "flex";
  darkness.style.opacity = 0;
  // Apply opacity transition with a delay
  setTimeout(() => {
    darkness.style.transition = "opacity 0.5s ease-in-out";
    darkness.style.opacity = 1;
  }, 10); // Small delay to allow display change before transition
}
function exitAbout() {
  const darkness = document.getElementById("about");
  darkness.style.opacity = 0;
  setTimeout(() => {
    darkness.style.display = "none";
  }, 500); // Matches transition duration
}

function openContact() {
  const darkness = document.getElementById("contact");

  // Set display to flex but keep opacity 0
  darkness.style.display = "flex";
  darkness.style.opacity = 0;
  // Apply opacity transition with a delay
  setTimeout(() => {
    darkness.style.transition = "opacity 0.5s ease-in-out";
    darkness.style.opacity = 1;
  }, 10); // Small delay to allow display change before transition
}
function exitContact() {
  const darkness = document.getElementById("contact");
  darkness.style.opacity = 0;
  setTimeout(() => {
    darkness.style.display = "none";
  }, 500); // Matches transition duration
}
