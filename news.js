fetch("news.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("news-list");
    if (!list) return;

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `
        <a href="${item.url}">
          ${item.date}｜${item.category}<br>
          ${item.title}
        </a>
      `;
      list.appendChild(div);
    });
  });
