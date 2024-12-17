document.getElementById('btnAlert').addEventListener('click', () => {
    alert('¡Bienvenido a tu primera página web!');
  });
  
  const btnToggle = document.getElementById('btnToggle');
  const extraInfo = document.getElementById('extraInfo');
  
  btnToggle.addEventListener('click', () => {
    if (extraInfo.style.display === 'none') {
      extraInfo.style.display = 'block';
      btnToggle.textContent = 'Ocultar información';
    } else {
      extraInfo.style.display = 'none';
      btnToggle.textContent = 'Mostrar más información';
    }
  });
  