document.addEventListener("DOMContentLoaded", () => {
  const customSelects = document.querySelectorAll(".select");

  customSelects.forEach((select) => {
    const selected = select.querySelector(".selected");
    const options = select.querySelector(".select-options");

    // Toggle dropdown when clicking on the select
    select.addEventListener("click", (e) => {
      e.stopPropagation();
      // Close all other dropdowns before opening a new one
      document.querySelectorAll(".select").forEach((el) => {
        if (el !== select) el.classList.remove("active");
      });

      select.classList.toggle("active");
    });

    // Select an option and close dropdown
    options.querySelectorAll("div").forEach((option) => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        selected.setAttribute("data-value", option.getAttribute("data-value"));
        setTimeout(() => select.classList.remove("active"), 100); // Delay to allow for click effect
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove("active");
      }
    });
  });

  // Show/hide fields based on selection
  document.getElementById("reason").addEventListener("click", (e) => {
    if (!e.target.dataset.value) return;

    const selectedValue = e.target.getAttribute("data-value");
    const offerWrapper = document.getElementById("offer-wrapper");
    const questionWrapper = document.getElementById("question-wrapper");
    const legalWrapper = document.getElementById("legal-wrapper");
    const submitButton = document.getElementById("submitButton");

    offerWrapper.style.display =
      selectedValue === "offer" ? "none" : "none"; /*flex*/
    questionWrapper.style.display =
      selectedValue === "question" ? "none" : "none"; /*flex*/
    legalWrapper.style.display = selectedValue === "legal" ? "block" : "block";

    submitButton.style.display =
      selectedValue === "offer" || selectedValue === "question"
        ? "none"
        : "none"; /*block*/
  });
});
