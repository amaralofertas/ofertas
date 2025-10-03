const cupons = [
  {
    "tipo": "ml",
    "codigo": "brincarpromo",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 25% OFF limite R$100 🔗 Válido aqui Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "ESQUENTA10",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 10% OFF, Limite de R$ 40 OFF 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "L9LR63XP9",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$20,00 OFF em compras de R$60,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "V1RTU4LM3L1D",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 30% OFF limite R$40 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "PROMOBRINQUEDO",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 40% off, compra mínima de R$79 e desconto máximo de R$100 🔗 Lista Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "BRAC0M3L1",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 18% de Desconto acima de R$79 limitado a R$60 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "MA3EB5B320",
    "condicoes": "Novo Cupom Shopee ! R$ 20,00 OFF em compras acima de R$ 119,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "MELIESPUMA15",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre Selecionados 🏷 15% OFF em R$ 10, Limitado a R$ 100 🔗 Valido para essa lista Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "1Y2M6KV7K",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$20,00 OFF em compras de R$60,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "ESQUENTA10",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 10% OFF com Limite de R$ 40 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "ESQUENTA10",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 10% OFF com Limite de R$ 40 🔗 Válido em 90% do site Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "No coupon code was found in the provided message.",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom Mercado Livre em Selecionados 🏷 R$ 120 OFF em compras acima de R$ 1399 Resgate em anúncios da Lista Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "TUD8MLI3BR",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre 🏷 18% OFF limite R$60 🔗 Válido em 90% do site Resgate aqui👇",
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

