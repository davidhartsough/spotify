export default function renderItem(item, type, detail) {
  return `
    <div class="item">
      <a href="https://open.spotify.com/${type}/${item.id}"
        target="_blank" rel="noopener noreferrer" class="a-link">
        <p class="a-name">${item.name}</p>
        ${!!item[detail] ? `<p class="a-detail">${item[detail]}</p>` : ""}
      </a>
    </div>
  `;
}
