const cupons = [
  {
    "tipo": "shopee",
    "codigo": "FLAJOGO4A2N7B",
    "condicoes": "Novo Cupom Shopee ! R$ 10,00 OFF Sem Valor mínimo Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "shopee",
    "codigo": "M45EB3BE20",
    "condicoes": "Novo Cupom Shopee ! R$ 20,00 OFF em R$ 119,00 Resgate aqui👇",
    "link": "https://s.shopee.com.br/1qQSP9GiRR"
  },
  {
    "tipo": "ml",
    "codigo": "MLdia2xp",
    "condicoes": "Novo Cupom Mercado Livre 🚨 Cupom do mercado Livre Selecionados 🏷 25% OFF ATÉ R$ 250,00 DE DESCONTO!! 🔗 Válido aqui Resgate aqui👇",
    "link": "https://mercadolivre.com/sec/2Z9KCQk"
  },
  {
    "tipo": "ml",
    "codigo": "V1NT3PR4VC",
    "condicoes": "Novo Cupom Mercado Livre 💛 20% OFF ATÉ R$ 60,00 DE DESCONTO!! Válido em 90% do site Resgate aqui👇",
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

