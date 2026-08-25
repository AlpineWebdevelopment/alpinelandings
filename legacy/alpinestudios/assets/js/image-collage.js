const track = document.getElementById("image-track");

const handleOnMove = (e) => {
  // Get the mouse position relative to the left side of the screen
  const mouseX = e.clientX;

  // Calculate the percentage of the mouse's position from 0% to 100% of the screen width
  const percentage = 10 + (mouseX / window.innerWidth) * 80;
  const imgPercentage = 10 + (percentage / 100) * 80;

  // Update the data attribute for percentage
  track.dataset.percentage = percentage;

  // Animate the image track
  track.animate(
    {
      transform: `translate(-${imgPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  // Animate individual images within the track
  for (const image of track.getElementsByClassName("trackImg")) {
    image.animate(
      {
        objectPosition: `${imgPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

/* -- Had to add extra lines for touch events -- */

window.onmousemove = (e) => handleOnMove(e);
window.ontouchmove = (e) => handleOnMove(e.touches[0]);
