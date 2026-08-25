document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".imageContainer");

  imageContainer.addEventListener("wheel", (event) => {
    event.preventDefault();

    gsap.to(imageContainer, {
      duration: 0.6, // Adjust for smoother feel
      scrollTo: { y: imageContainer.scrollTop + event.deltaY * 2 },
      ease: "power2.out",
    });
  });
});
