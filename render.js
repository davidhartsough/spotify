import renderList from "./list.js";
import shuffle from "./shuffle.js";

export default function renderPage(type, afavs) {
  const listDiv = document.getElementById("a-list");
  const showAllButton = document.getElementById("showall");
  const shuffleButton = document.getElementById("shuffle");
  const actionsDiv = document.getElementById("actions");
  const detail = type === "artist" ? "genres" : "artist";
  const renderShuffle = () => {
    const items = shuffle(afavs);
    renderList(type, items, detail, listDiv);
    showAllButton.style = "display: block";
    shuffleButton.blur();
  };
  shuffleButton.onclick = renderShuffle;
  const showAll = () => {
    renderList(type, afavs, detail, listDiv);
    showAllButton.style = "display: none";
  };
  showAllButton.onclick = showAll;
  renderShuffle();
  actionsDiv.style = "display: block";
}
