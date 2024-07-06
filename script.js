document.addEventListener('DOMContentLoaded', () => {
    const words = [
      ['Cognifyz', 'Technologies'],
     
    ];
    
    const colors = [
      ['#3498db', '#e74c3c'],
      ['#1abc9c', '#f39c12'],
      ['#9b59b6', '#2ecc71'],
      ['#e67e22', '#2980b9']
    ];
    
    let currentIndex = 0;
    const wordElements = document.querySelectorAll('.swipe-word');
  
    setInterval(() => {
      wordElements.forEach((element, index) => {
        element.style.opacity = 0; // Fade out effect
      });
  
      setTimeout(() => {
        wordElements.forEach((element, index) => {
          element.textContent = words[currentIndex][index];
          element.style.color = colors[currentIndex][index];
          element.style.opacity = 1; // Fade in effect
        });
  
        currentIndex = (currentIndex + 1) % words.length;
      }, 500);
    }, 500); // Change every 5 seconds
  });
  