const cupons = [
  {
    "tipo": "shopee",
    "codigo": "W3B1N4RSVSHP457",
    "condicoes": "Novo Cupom Shopee ! R$ 15,00 OFF em R$ 49,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "R0X5N8TQV",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "M3LI3XPR3SS",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do Mercado Livre 🏷 30% de Desconto com compra mínima de R$79 e limite de R$60 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "M3LI3XPR3SS",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 30% de Desconto com compra mínima de R$79 Limite de R$60 válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "PROMOHOJE",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🔥 20% OFF com limite de R$ 150 de desconto 🔗 Em todos os produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "exclusivoml22",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 R$10,00 OFF em 39 ⚠️ Para Pessoas SELECIONADAS 🔗 Em todos produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "P9Q2F5WZX",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "C3N8X0YRV",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "J6P7W1VXC",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "OFERTADEZ",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 10% OFF compra mínima de R$ 800 limite de R$ 200 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "F5X0N3LVR",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "Z8QK5J9UR",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "M3LI3XPR3SS",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 30% de Desconto com Limite de R$ 40 compra mínima de R$79 🔗 Válido em 90% do site Resgate aqui👇",
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

