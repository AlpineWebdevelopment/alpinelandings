const track = document.getElementById("image-track");

const handleScroll = () => {
  const trackRect = track.getBoundingClientRect();
  const trackHeight = track.scrollHeight;
  const trackScrollTop = track.scrollTop;

  for (const image of track.getElementsByClassName("trackImg")) {
    const imgRect = image.getBoundingClientRect();
    const percentage = ((imgRect.top - trackRect.top) / trackHeight) * 400;

    // Animate object position based on scroll percentage
    image.style.objectPosition = `center ${percentage}%`;
  }
};

// Listen for scroll events on the container instead of the window
track.addEventListener("scroll", handleScroll);
