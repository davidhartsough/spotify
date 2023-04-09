import renderItem from "./item.js";

export default function renderList(type, items, detail, listDiv) {
  listDiv.innerHTML = items
    .map((item) => renderItem(item, type, detail))
    .join(" ");
}
