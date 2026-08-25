function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function moveBlob() {
  const blob = document.getElementById("blob");
  const blob2 = document.getElementById("blob2");
  const blob3 = document.getElementById("blob3");
  const x1 = randomFloat(-50, 50); // Random X position
  const y1 = randomFloat(-50, 50); // Random Y position
  const x2 = randomFloat(-50, 50); // Random X position
  const y2 = randomFloat(-50, 50); // Random Y position
  const duration = randomFloat(6, 12); // Random speed

  blob.style.transition = `transform ${duration}s ease-in-out`;
  blob2.style.transition = `transform ${duration}s ease-in-out`;
  blob3.style.transition = `transform ${duration}s ease-in-out`;
  blob.style.transform = `translate(${x1}vw, ${y1}vh)`;
  blob2.style.transform = `translate(${x2}vw, ${y2}vh)`;
  blob3.style.transform = `translate(${x1 * -1}vw, ${y1 * -1}vh)`;

  setTimeout(moveBlob, duration * 1000); // Call function again after animation
}

moveBlob(); // Start animation
