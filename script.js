document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
  
      // Toggle active class
      accordionItem.classList.toggle('active');
  
      // Show/hide content
      const content = accordionItem.querySelector('.accordion-content');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  