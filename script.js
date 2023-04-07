const lienzo = document.querySelector('#lienzo');

lienzo.addEventListener('mousemove', function(e) {
  const rastro = document.createElement('div');
  rastro.classList.add('rastro');
  rastro.style.backgroundImage = `url(${getRandomImage()})`;
  rastro.style.left = e.pageX - 25 + 'px';
  rastro.style.top = e.pageY - 25 + 'px';
  lienzo.appendChild(rastro);
  
  setTimeout(() => {
    rastro.classList.add('caida');
  }, 3000);
});

function getRandomImage() {
  const images = [
    'https://picsum.photos/50?random=1',
    'https://picsum.photos/50?random=2',
    'https://picsum.photos/50?random=3',
    'https://picsum.photos/50?random=4',
    'https://picsum.photos/50?random=5',
    'https://picsum.photos/50?random=6',
    'https://picsum.photos/50?random=7',
    'https://picsum.photos/50?random=8',
    'https://picsum.photos/50?random=9',
    'https://picsum.photos/50?random=10',
  ];
  return images[Math.floor(Math.random() * images.length)];
}
