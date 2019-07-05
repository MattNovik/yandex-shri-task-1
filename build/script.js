document.body.addEventListener('click', (e) => {
  const onoffswitch = e.target.closest('.onoffswitch');
  if (onoffswitch) {
    document.querySelectorAll('.theme_color_project-default')
      .forEach(el => el.classList.toggle('theme_color_project-inverse'));
    onoffswitch.classList.toggle('onoffswitch_on');
  } else if (e.target.closest('.e-accordion__short')) {
    e.target.closest('.e-accordion__short').nextElementSibling.classList.toggle('e-accordion__more_show');
  }
});
