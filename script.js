function startAnimation() {
  const balloonsContainer = document.getElementById('balloons');
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = 2 + Math.random() * 3 + 's';
    balloonsContainer.appendChild(balloon);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .balloon {
      position: absolute;
      bottom: 0;
      width: 30px;
      height: 40px;
      background-color: hsl(${Math.random() * 360}, 70%, 60%);
      border-radius: 50% 50% 45% 45%;
      animation: floatUp linear infinite;
    }
    @keyframes floatUp {
      from { transform: translateY(0); }
      to { transform: translateY(-100vh); }
    }
  `;
  document.head.appendChild(style);
});
