const letters = "ABCDEFGHIJKLMNOPQRSTUvwXYZ";
const h1 = document.getElementById("msg");

let interval = null;

function scrambleText() {
  let iteration = 0;

  // Clear any previous intervals
  clearInterval(interval);

  interval = setInterval(() => {
    h1.innerText = h1.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= h1.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

function animateElement(element, options) {
  return new Promise((resolve) => {
    element.style.transition = `${options.duration}s ${options.ease}`;
    if (options.opacity !== undefined) element.style.opacity = options.opacity;
    if (options.transform !== undefined)
      element.style.transform = options.transform;
    if (options.filter !== undefined) element.style.filter = options.filter;

    setTimeout(resolve, options.duration * 500);
  });
}

function staggerAnimation(elements, options) {
  return new Promise((resolve) => {
    elements.forEach((el, i) => {
      setTimeout(() => {
        animateElement(el, options);
      }, i * options.stagger * 1000);
    });
    setTimeout(
      resolve,
      (elements.length * options.stagger + options.duration) * 1000
    );
  });
}

function animateCounter(duration) {
  return new Promise((resolve) => {
    let counter = 0;
    const loadingDiv = document.getElementById("loading");
    const incrementTime = duration * 10; // Smooth counting

    const interval = setInterval(() => {
      counter++;
      loadingDiv.innerText = counter.toString().padStart(3, "0");

      if (counter >= 100) {
        clearInterval(interval);
        resolve();
      }
    }, incrementTime);
  });
}

async function startAnimation() {
  // Start the counter (runs in parallel)
  animateCounter(5); // Adjust duration to match your animation

  await animateElement(document.getElementById("top-gradient"), {
    duration: 1.25,
    ease: "ease-in-out",
    opacity: 1,
    filter: "blur(10vw)",
  });
  await animateElement(document.getElementById("bottom-gradient"), {
    duration: 1.25,
    ease: "ease-in-out",
    opacity: 1,
    filter: "blur(0)",
  });

  await animateElement(document.getElementById("green-filter"), {
    duration: 1.0,
    ease: "ease-out",
    opacity: 1,
    transform: "scale(3)",
  });

  await animateElement(document.getElementById("green-filter"), {
    duration: 0.75,
    ease: "ease-in",
    opacity: 0,
    transform: "scale(3)",
  });

  await animateElement(document.getElementById("top-gradient"), {
    duration: 0.6,
    ease: "ease-in",
    opacity: 0,
    filter: "blur(10vw)",
  });
  await animateElement(document.getElementById("bottom-gradient"), {
    duration: 0.6,
    ease: "ease-in",
    opacity: 0,
    filter: "blur(0)",
  });

  await animateElement(document.getElementById("logo"), {
    duration: 0.6,
    ease: "ease-in",
    opacity: 1,
  });
  await animateElement(document.getElementById("logo"), {
    duration: 2,
    ease: "ease-in",
    opacity: 1,
  });
  await animateElement(document.getElementById("logo-border"), {
    duration: 0.8,
    ease: "ease-in",
    transform: "scale(8)",
  });
  await Promise.all([
    animateElement(document.getElementById("logo-border-inner"), {
      duration: 1.6,
      ease: "ease-in",
      transform: "scale(8)",
    }),
    animateElement(document.getElementById("logo"), {
      duration: 1.6,
      ease: "ease-in",
      transform: "scale(2.0)",
    }),
    animateElement(document.getElementById("logo"), {
      duration: 1.6,
      ease: "ease-in",
      opacity: 0.25,
      filter: "blur(1.67vw)",
    }),
  ]);

  // await animateElement(document.getElementById("logo-border"), { duration: 0.5, ease: "ease-out", opacity: 1, transform: "scale(0.75)" });
  // await animateElement(document.getElementById("logo-border-inner"), { duration: 0.5, ease: "ease-out", transform: "scale(0.75)" });

  const loading = document.getElementById("loading");
  await Promise.all([
    await animateElement(document.getElementById("logo"), {
      duration: 0.8,
      ease: "ease-in-out",
      opacity: 0,
    }),
    await animateElement(document.getElementById("body"), {
      duration: 1,
      ease: "ease-in",
      opacity: 0,
    }),
    await animateElement(loading, {
      duration: 1,
      ease: "ease-in-out",
      opacity: 0,
    }),
  ]);
  document.getElementById("body").style.display = "none";

  scrambleText();
  // Trigger the function every 20 seconds (20000 milliseconds)
  setInterval(scrambleText, 20000);

  const cover = document.getElementById("cover");
  await animateElement(cover, { duration: 1, ease: "ease-in-out", opacity: 0 });
  // Hide counter after animation finishes
  loading.style.display = "none";

  setTimeout(() => {
    cover.style.display = "none";
  }, 500);
}

// Start the animation
startAnimation();
// document.getElementById("body").style.display = "none";
// document.getElementById("cover").style.display = "none";
// document.getElementById("loading").style.display = "none";
