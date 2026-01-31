const newsData = [
  {
    date: "2026.1.14",
    title: "コンサート 更新",
    url: "#"
  },
  {
    date: "2026.1.11",
    title: "Special 更新",
    url: "#"
  },
  {
    date: "2026.1.1",
    title: "お知らせ",
    url: "#"
  }
];

const list = document.getElementById("news-list");

newsData.forEach(item => {
  const li = document.createElement("li");
  li.className = "news-item";
  li.innerHTML = `<a href="${item.url}">${item.date}｜${item.title}</a>`;
  list.appendChild(li);
});

