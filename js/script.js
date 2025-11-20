let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 0) {
    // Add transparency when scrolling
    header.style.opacity = '0.7';
    
    if (scrollTop > lastScrollTop) {
      // Scrolling down - hide header
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up - show header
      header.style.transform = 'translateY(0)';
    }
  } else {
    // At top of page - full opacity
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});
