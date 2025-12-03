const cupons = [
  {
    "tipo": "ml",
    "codigo": "MODAAQUINOMELI",
    "condicoes": "Novo Cupom Mercado Livre 💛 15% OFF 🚨 Limite de R$ 100 Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "shopee",
    "codigo": "4LAf0l6Rmt",
    "condicoes": "Novo Cupom Shopee ! R$ 100 OFF em R$ 899 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "4LAf0l6Rmt",
    "condicoes": "Novo Cupom Shopee ! R$ 100 OFF em compras acima de R$ 899 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "M2E9H3R0VQ",
    "condicoes": "Novo Cupom Shopee ! R$ 20,00 OFF em compras de R$ 60,00 em todas as lojas Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "rossi25",
    "condicoes": "Novo Cupom Shopee ! 🏷 R$ 25 OFF em R$ 150,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "A8N9B4F3ZT",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF em compras de R$ 40,00 em todas as lojas Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "FLA10N16QK7S4D",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF Sem Valor mínimo Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "SUPLEMENTO10OFF",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 R$ 10,00 OFF em compras de R$ 90,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "FLAJ25OYD97",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF Sem Valor mínimo! Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "LAVADORA25OFF",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 25% OFF com limite de até R$ 225,00 em compras acima de R$ 500,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "N6J3XZQ0FW",
    "condicoes": "Novo Cupom Shopee ! Cashback de 50%, até R$ 50,00 em Moedas de volta para TODAS AS LOJAS Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "FLAJ2M1SA6",
    "condicoes": "Novo Cupom Shopee ! R$ 25,00 OFF Sem Valor mínimo Resgate aqui👇",
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
    "codigo": "T1X4S8G7LB",
    "condicoes": "Novo Cupom Shopee ! 💛 R$20,00 OFF 🏷 R$20,00 de desconto em compra mínima de R$60,00 🔗 Em todas as lojas Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "TV25OFF",
    "condicoes": "Novo Cupom Shopee ! 🚨 Cupom Shopee 🏷 25% OFF com limite de até R$ 225,00 em compras acima de R$ 500,00 Resgate aqui👇",
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

