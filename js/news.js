const newsData = [
  {
    date: "2026.1.26",
    category: "ムービー",
    title: "嵐よりファンクラブ会員の皆さまへ 嬉しいお知らせ",
    url: "#"
  },
  {
    date: "2026.1.25",
    category: "ムービー",
    title: "嵐Movie 1.25 更新！",
    url: "#"
  }
];

const list = document.getElementById("news-list");

if(list){
  newsData.forEach(item => {
    const li = document.createElement("li");
    li.className = "news-item";
    li.innerHTML = `
      <a href="${item.url}">
        <strong>${item.date}｜${item.category}</strong><br>
        ${item.title}
      </a>
    `;
    list.appendChild(li);
  });
}
