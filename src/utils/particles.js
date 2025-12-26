export const createParticles = (containerId = 'particles-container', count = 20) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 0.5 + 's';
    container.appendChild(particle);
    
    setTimeout(() => particle.remove(), 2000);
  }
};
