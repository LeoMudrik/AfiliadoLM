const products = [
  {
    name: "Echo Dot 5ª Geração",
    price: "R$ 413,11",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    link: "https://a.co/d/a3OqXkK"
  },
  {
    name: "Smartphone Samsung Galaxy A05s 6,7 Tela Infinita 128GB + 6GB RAM",
    price: "R$ 719,90",
    image: "https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX679_.jpg",
    link: "https://amzn.to/4ptzUnZ"
  },
  {
    name: "JBL, Caixa de Som, Xtreme 4, Bluetooth, Portátil, Com Powerbank, Auracast, Playtime Boost, À Prova D'água e Resistente À Poeira - Preta",
    price: "R$ 1.558,00",
    image: "https://m.media-amazon.com/images/I/71jzFcaXnzL._AC_SX522_.jpg",
    link: "https://amzn.to/4jrR5Vf"
  },
    {
    name: "Samsung Celular Galaxy A26 5G 256GB, 8GB RAM, Câmera de 50MP, IP67, Tela Super AMOLED 6.7",
    price: "R$ 1.299,00",
    image: "https://m.media-amazon.com/images/I/51RqnFVy3lL._AC_SX522_.jpg",
    link: "https://amzn.to/4snk3tP"
  },
    {
    name: "Sanduicheira Elétrica Cadence Click - 127V",
    price: "R$ 100,00",
    image: "https://m.media-amazon.com/images/I/51UxR8FHe-L._AC_SX679_.jpg",
    link: "https://amzn.to/4ptd8MO"
  },
    {
    name: "Bettdow Projetor 4k 8k 24000 Lumens Hd 1080p Compatível Completo De Android 12,",
    price: "R$ 1.124,87",
    image: "https://m.media-amazon.com/images/I/61H+OxOqTbL._AC_SX679_.jpg",
    link: "https://amzn.to/3NbVeRd"
  },
    {
    name: "Mouse Gamer Sem Fio Logitech G PRO X SUPERLIGHT 2 com Tecnologia LIGHTSPEED, Ultraleve, Switch LIGHTFORCE, Sensor HERO 2 com 44K DPI, 5 botões programáveis e Bateria Recarregável - Preto",
    price: "R$ 750,22",
    image: "https://m.media-amazon.com/images/I/51fBcz6DnTL._AC_SX679_.jpg",
    link: "https://amzn.to/496JnMW"
  },
      {
    name: "Mouse Gamer Redragon Cobra Pro RGB, Wireless, Sem Fio, 16000DPI, 8 Botões Programáveis, USB 2.4G - M711 Pro",
    price: "R$ 170,57",
    image: "https://m.media-amazon.com/images/I/51JmbHCiqQL._AC_SX679_.jpg",
    link: "https://amzn.to/45sWmpS"
  },
      {
    name: "Tablet Samsung Galaxy Tab S10 FE, Cinza, 128GB, 8GB RAM, Tela Imersiva de 10.9 90Hz, Camera Traseira de 13MP, Câmera Frontal de 12MP Ultra Wide, Wifi 6, IP68, Android 15",
    price: "R$ 2.800,00",
    image: "https://m.media-amazon.com/images/I/51m661VQOKL._AC_SX679_.jpg",
    link: "https://amzn.to/3Yn1MPx"
  },
      {
    name: "Galaxy Tab S10 Lite, 128GB, Tela 10.9, WIFI, CinzaMouse Gamer Sem Fio Logitech G PRO X SUPERLIGHT 2 com Tecnologia LIGHTSPEED, Ultraleve, Switch LIGHTFORCE, Sensor HERO 2 com 44K DPI, 5 botões programáveis e Bateria Recarregável - Preto",
    price: "R$ 2.235,00",
    image: "https://m.media-amazon.com/images/I/51+MAB1X17L._AC_SX679_.jpg",
    link: "https://amzn.to/4ptf8Vk"
  },    
  {
    name: "TABLET GALAXY TAB A9 EE 8,7 64GB 4G GRAFITE",
    price: "R$ 764,10",
    image: "https://m.media-amazon.com/images/I/51ZiNW8NkZL._AC_SX679_.jpg",
    link: "https://amzn.to/4qb5Iz4"
  },
  {
    name: "Tablet VAIO TL10 8GB 128GB Octa-Core, Tela 10.4” 2K, 4G WiFi, Câmera 8MP + Selfie 5MP, 7000mAh, Android 13, com Teclado de Conexão Inteligente – Preto",
    price: "R$ 1.299,00",
    image: "https://m.media-amazon.com/images/I/51QH9AsasuL._AC_SX679_.jpg",
    link: "https://amzn.to/4aMkI1A"
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
