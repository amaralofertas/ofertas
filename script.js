const cupons = [
  {
    "tipo": "ml",
    "codigo": "20MELI0FF",
    "condicoes": "Novo Cupom Mercado Livre 💛 20% 🚨 Cupom do Mercado Livre 🏷 20% de Desconto com Limite de R$ 60 🔗 Em todos produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "RRVEGT4YK",
    "condicoes": "Novo Cupom Shopee ! 💛 R$ 20,00 OFF em R$ 60,00 🏷 Desconto de R$20,00 na compra mínima de R$60,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "ERQU0A6RZ",
    "condicoes": "Novo Cupom Shopee ! 🏷 Cashback de 50% até R$ 50,00 em Moedas de volta Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "20EXTRA",
    "condicoes": "Novo Cupom Mercado Livre 20% OFF com limite de R$30 Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "UMAPROMOHOJE",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom Mercado Livre 🏷 15% OFF Limite de R$ 60 🔗 Em todos produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "M4R4T0NAD0L4R",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 15% OFF com limite de até R$ 75,00 em compras acima de R$ 39,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "CHEGOUPROMO",
    "condicoes": "Novo Cupom Mercado Livre 20% OFF com Limite de R$ 60 Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": " (no coupon code found)",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom Mercado Livre 🏷 30% OFF em Selecionados, Limite de R$ 50 OFF Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
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

