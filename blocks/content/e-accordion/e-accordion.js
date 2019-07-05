document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.e-accordion__short')) {
      e.target.closest('.e-accordion__short').nextElementSibling.classList.toggle('e-accordion__more_show');
    }
  });
});
