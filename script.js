const cupons = [
  {
    "tipo": "shopee",
    "codigo": "k3l1h5f8",
    "condicoes": "Novo Cupom Shopee ! Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "PROMOML",
    "condicoes": "Novo Cupom Mercado Livre 💛 30% OFF com limite de R$40 e 25% OFF com limite de R$40 🔗 Em todos os produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "k3l1h5f8",
    "condicoes": "Novo Cupom Shopee ! Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "CUPOML",
    "condicoes": "Novo Cupom Mercado Livre 💛 15% 🚨 Cupom Mercado Livre 🏷 15% de Desconto com Limite de R$ 60 Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "Q1X2Z3A4",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 20,00 OFF em R$ 60,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "L5J0X2V8RH",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "X8D3E9R5PQ",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 para todas as lojas Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "T1X4S8G7LB",
    "condicoes": "Novo Cupom Shopee ! 💛 R$20,00 OFF 🏷 R$20,00 de desconto em compra mínima de R$60,00 🔗 Em todas as lojas Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "TV25OFF",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 25% OFF com limite de até R$ 225,00 em compras acima de R$ 500,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "W1Y9C8Q3UZ",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee! 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "N6T2V4M0LJ",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "M4RC3L15EL",
    "condicoes": "Novo Cupom Mercado Livre 🚨 CUPOM MERCADO LIVRE 15% OFF, máximo de R$ 80 OFF 🔗 Em todos produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "DESCONTOS",
    "condicoes": "Novo Cupom Mercado Livre 💛 25% 🚨 Cupom do Mercado Livre 🏷 25% de Desconto com Limite de R$40 🔗 Em todos produtos Resgate aqui👇",
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

