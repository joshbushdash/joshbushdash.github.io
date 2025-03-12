document.addEventListener('DOMContentLoaded', function() {
  // Create the attribution element
  const attribution = document.createElement('div');
  attribution.innerHTML = 'Contents since Sep. 2024 are Assisted by <a href="https://claude.ai" target="_blank">Claude.ai</a>';
  attribution.style.position = 'fixed';
  attribution.style.bottom = '10px';
  attribution.style.right = '10px';
  attribution.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  attribution.style.padding = '5px 10px';
  attribution.style.borderRadius = '5px';
  attribution.style.fontSize = '12px';
  attribution.style.zIndex = '1000';
  attribution.style.fontFamily = 'inherit';
  
  // Add dark mode support
  const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = document.body.classList.contains('dark-theme');
  
  if (isDarkMode) {
    attribution.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
    attribution.style.color = '#ffffff';
  } else {
    attribution.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    attribution.style.color = '#333333';
  }
  
  // Add the attribution to the body
  document.body.appendChild(attribution);
  
  // Update on theme change
  const themeButtons = document.querySelectorAll("#btn-brightness");
  themeButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
      if (document.body.classList.contains('dark-theme')) {
        attribution.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
        attribution.style.color = '#ffffff';
      } else {
        attribution.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        attribution.style.color = '#333333';
      }
    });
  });
});