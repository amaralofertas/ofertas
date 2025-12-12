const cupons = [
  {
    "tipo": "shopee",
    "codigo": "GK10ACC",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em R$ 50,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "ACHADINHOS30",
    "condicoes": "Novo Cupom Mercado Livre 💛 18% 🚨 Cupom do Mercado Livre 🏷 18% de Desconto com Limite de R$ 60 💛 30% 🚨 Cupom do Mercado Livre 🏷 30% de Desconto com Limite de R$ 40 🔗 Em produtos do link Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "ACHADINHOS30",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do Mercado Livre 🏷 30% OFF, Limite de R$ 25 OFF 🔗 Em todos produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "30OFFNO1212AF",
    "condicoes": "Novo Cupom Shopee ! 30% OFF (desconto máximo de R$15) 20% OFF (desconto máximo de R$5) Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "30OFFNO1212AF",
    "condicoes": "Novo Cupom Shopee ! 🚨 30% OFF (desconto máximo de R$15) 🏷 20% OFF (desconto máximo de R$5) Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "MELI12D12",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do Mercado Livre 🏷 18% de Desconto com Limite de R$ 60 e 🏷 30% de Desconto com Limite de R$ 25 🔗 Em todos os produtos Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "30OFFNO1212AF",
    "condicoes": "Novo Cupom Shopee ! 30% OFF desconto máximo de R$15 20% OFF desconto máximo de R$5 Resgate aqui👇",
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

