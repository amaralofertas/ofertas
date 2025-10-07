const cupons = [
  {
    "tipo": "ml",
    "codigo": "APROVEITANOMELI",
    "condicoes": "Novo Cupom Mercado Livre 💛 25% 🚨 Cupom do mercado Livre 🏷 25% de Desconto com Limite de R$ 60 válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "R2OQX14C5",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "APROVEITANOMELI",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 25% OFF com limite de R$ 60 válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "V3MQU3T3M1",
    "condicoes": "Novo Cupom Mercado Livre 💛 20% 🚨 Cupom do mercado Livre 🏷 20% de Desconto compra mínima de R$79 limite de R$150 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "9YN7O05VD",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "Q2ZW6FPCL",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "LBPJ46C0E",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee! 🏷 Cashback de 50%, até R$ 50,00 em Moedas de volta Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "B3TNRX9P0",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "V3MQU3T3M1",
    "condicoes": "Novo Cupom Mercado Livre 💛 20% OFF compra mínima de R$79 limite de R$60 válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "V3MQU3T3M1",
    "condicoes": "Novo Cupom Mercado Livre 20% de Desconto compra mínima de R$79 limite de R$40 válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "0C4R4D45H0P33",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "YB2XH0W7T",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "7QK54NBGE",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "DOZEMELI",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 12% OFF acima de 599, limite R$150 Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "XZPD4WF30",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF em R$ 40,00 Resgate aqui👇",
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

