document.querySelector('.menu-button').addEventListener('click', function() {
  const menuOptions = document.querySelector('.menu-options');
  menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
});

// for menu options
const menuToggle = document.querySelector('.menu-toggle');
const allNav = document.querySelector('.list-section');

menuToggle.addEventListener('click', () => {
  allNav.classList.toggle('active');
});


// for footer 
document.addEventListener('DOMContentLoaded', function() {
  const FooterHeader = document.querySelectorAll('.footer_coloum h3');

  FooterHeader.forEach(headerH3 => {
    headerH3.addEventListener('click', function() {
      const list = this.nextElementSibling;

      // Toggle display of the associated list
      if (list.style.display === 'block' || list.style.display === '') {
        list.style.display = 'none';
      } else {
        list.style.display = 'block';
      }
    });
  });
});