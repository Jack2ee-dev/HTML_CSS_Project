const upperSearchButton = document.querySelector(".upper__searchButton");
const emoticonSearch = document.querySelector(".emoticonSearch");
const upperHeader = document.querySelector(".upper");
const emoticonSearchCloseButton = document.querySelector(".emoticonSearch__closeButton");

const controlledComponents = [upperSearchButton, emoticonSearchCloseButton];

controlledComponents.map((component) => {
  component.addEventListener("click", () => {
    toggleEmoticonSearch();
    focusEmoticonInput();
  })
})

function toggleEmoticonSearch() {
  emoticonSearch.classList.toggle("emoticonSearch--open");
}

function focusEmoticonInput() {
  if (emoticonSearch.classList.contains("emoticonSearch--open")) {
    document.getElementById("emoticonSearchInput").autofocus = true;
  }
}
