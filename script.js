const cupons = [
  {
    "tipo": "ml",
    "codigo": "R3AL1Z3S3X",
    "condicoes": "Novo Cupom Mercado Livre 💛 35% OFF acima de R$79 limite de R$60, 15% OFF acima de R$79 limite de R$60, 20% OFF acima de R$79 limite de R$150 Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "U9R5T2M0X",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "10SHOPEE10",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 50,00 OFF em R$ 249,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "OSL2YOW3R",
    "condicoes": "Novo Cupom Shopee ! R$ 20,00 OFF em R$ 60,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "R3AL1Z3S3X",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom Mercado Livre 🏷 35% OFF acima de R$79 limitado a R$60 🔗 Não válido em todos os vendedores Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "D3X6W8N7P",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "FESTIVAL50",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 50,00 OFF em R$ 249,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "K5T9X4V2N",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "W2P8K0Y3R",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em compras de R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  }
];

window.mostrarCupons = function(tipo){
  const container = document.getElementById('container-cupom');
  container.innerHTML = '';
  cupons.filter(c => c.tipo === tipo).forEach(c => {
    const div = document.createElement('div');
    div.className = 'cupom';
    const ultimos = c.codigo.slice(-4);
    const titulo = c.tipo === 'ml' ? 'Mercado Livre' : 'Shopee';
    div.innerHTML = '<h3>' + titulo + '</h3>' +
                    '<div class="cupom-tampado">**** **** **** ' + ultimos + '</div>' +
                    '<div class="condicoes">' + c.condicoes + '</div>' +
                    '<button class="btn ' + c.tipo + '-btn">Revelar e Copiar Cupom</button>';
    const btn = div.querySelector('button');
    btn.addEventListener('click', () => {
      const cupomDiv = div.querySelector('.cupom-tampado');
      cupomDiv.textContent = c.codigo;
      navigator.clipboard.writeText(c.codigo).then(() => {
        btn.textContent = 'Cupom Copiado!';
        btn.disabled = true;
        window.explosaoConfete(div);
        setTimeout(() => { window.location.href = c.link; }, 1000);
      });
    });
    container.appendChild(div);
  });
};

window.explosaoConfete = function(card){
  for(let i=0;i<40;i++){
    const confete = document.createElement('div');
    confete.className = 'confete';
    confete.style.left = Math.random() * card.offsetWidth + 'px';
    confete.style.top = '0px';
    confete.style.width = confete.style.height = (Math.random()*8 + 5) + 'px';
    confete.style.background = 'hsl(' + (Math.random()*360) + ',100%,50%)';
    card.appendChild(confete);
    const rot = Math.random()*720;
    confete.animate([
      { transform: 'translateY(0px) rotate(0deg)', opacity:1 },
      { transform: 'translateY(' + (card.offsetHeight+100) + 'px) rotate(' + rot + 'deg)', opacity:0 }
    ], { duration: 1000 + Math.random()*500, easing: 'ease-out' });
    setTimeout(()=> confete.remove(), 1500);
  }
};

