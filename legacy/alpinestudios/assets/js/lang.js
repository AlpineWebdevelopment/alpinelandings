async function changeLanguage(lang) {
  console.log("works " + lang);

  const response = await fetch("assets/js/lang.json");
  const translations = await response.json();

  document.querySelectorAll("[data-key]").forEach((element) => {
    const page =
      element.closest("[data-page]")?.getAttribute("data-page") || "index";
    const key = element.getAttribute("data-key");
    const translatedText = translations[lang][page][key];

    if (Array.isArray(translatedText)) {
      // If translation is an array, update individual divs inside
      const divs = element.querySelectorAll(".translatable");
      divs.forEach((div, index) => {
        if (translatedText[index]) {
          div.innerText = translatedText[index];
        }
      });
    } else {
      if (element.tagName === "INPUT" && element.type === "submit") {
        // Update the button's value
        element.value = translatedText;
      } else {
        // If it's a normal string, replace the entire content
        element.innerHTML = translatedText;

        // Update the data-value attribute if it exists
        if (element.hasAttribute("data-value")) {
          element.setAttribute("data-value", translatedText);
        }
      }
    }
  });

  // Update language selector
  updateLanguageSelector(lang);

  // Save preference and update URL
  localStorage.setItem("selectedLang", lang);
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);
}

function updateLanguageSelector(currentLang) {
  const languageOptions = document.querySelector(".select-options.country");

  languageOptions.querySelectorAll("a").forEach((anchor) => {
    const langCode = anchor.innerText.toLowerCase();

    if (langCode === currentLang) {
      anchor.innerText = "EN"; // Change to English label
      anchor.setAttribute("onclick", `changeLanguage('en')`);
    } else {
      anchor.innerText = langCode.toUpperCase();
      anchor.setAttribute("onclick", `changeLanguage('${langCode}')`);
    }
  });
}
// Load saved language or default to English
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const savedLang =
    urlParams.get("lang") || localStorage.getItem("selectedLang") || "en";
  changeLanguage(savedLang);
});
