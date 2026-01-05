const products = [
  {
    name: "Echo Dot 5ª Geração",
    price: "R$ 413,11",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    link: "https://a.co/d/a3OqXkK"
  },
  {
    name: "martphone Samsung Galaxy A05s 6,7 Tela Infinita 128GB + 6GB RAM",
    price: "R$ 719,90",
    image: "https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX679_.jpg",
    link: "https://amzn.to/4ptzUnZ"
  },
  {
    name: "Kindle 11ª Geração",
    price: "R$ 449,00",
    image: "https://m.media-amazon.com/images/I/61L4ndkUzJL._AC_SL1000_.jpg",
    link: "https://www.amazon.com.br/?tag=SEUTAG-20"
  },
    {
    name: "Kindle 11ª Geração",
    price: "R$ 449,00",
    image: "https://m.media-amazon.com/images/I/61L4ndkUzJL._AC_SL1000_.jpg",
    link: "https://www.amazon.com.br/?tag=SEUTAG-20"
  },
    {
    name: "Kindle 11ª Geração",
    price: "R$ 449,00",
    image: "https://m.media-amazon.com/images/I/61L4ndkUzJL._AC_SL1000_.jpg",
    link: "https://www.amazon.com.br/?tag=SEUTAG-20"
  },
    {
    name: "Kindle 11ª Geração",
    price: "R$ 449,00",
    image: "https://m.media-amazon.com/images/I/61L4ndkUzJL._AC_SL1000_.jpg",
    link: "https://www.amazon.com.br/?tag=SEUTAG-20"
  },
    {
    name: "Kindle 11ª Geração",
    price: "R$ 449,00",
    image: "https://m.media-amazon.com/images/I/61L4ndkUzJL._AC_SL1000_.jpg",
    link: "https://www.amazon.com.br/?tag=SEUTAG-20"
  }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

function renderProducts(filter = "") {
  productList.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
      card.onclick = () => window.open(product.link, "_blank");

      card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <span>${product.price}</span>
      `;

      productList.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

renderProducts();
