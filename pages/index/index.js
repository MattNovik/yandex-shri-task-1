import parseBEM from '../../build/template-engine.js';
import header from '../../content/header/header.js';
import footer from '../../content/footer/footer.js';
import payment from '../../content/payment/payment.js';
import warning from '../../content/warning/warning.js';
import product from '../../content/product/product.js'
import history from '../../content/history/history.js';
import commercial from '../../content/commercial/commercial.js';

const productWrapped = {
  block: 'grid',
  elem: 'fraction',
  elemMods: { 'm-col': '2' },
  content: product,
};

const genProducts = (num) => {
  const products = [];
  for (let i = 0; i < num; i += 1) {
    products.push(productWrapped);
  }
  return products;
};

const index = {
  block: 'layout',
  mix: {
    block: 'theme',
    mods: { gap: 'small', color: 'project-default', size: 'default', space: 'default' }
  },
  content: [
    header,
    {
      block: 'layout',
      elem: 'container',
      elemMods: { 'indent-b': 'xxl', size: 'm', align: 'center' },
      content: {
        block: 'grid',
        mods: { 'm-columns': '10', 'col-gap': 'full', 'row-gap': 'full' },
        content: [
          {
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '5' },
            content: payment
          },
          {
            block: 'grid',
            elem: 'fraction',
            elemMods: { 'm-col': '5' },
            content: warning
          }
        ]
      }
    },
    {
      block: 'layout',
      elem: 'container',
      elemMods: { 'indent-b': 'xxl', size: 'm', align: 'center'  },
      content: {
        block: 'grid',
        mods: { 'm-columns': '10', 'col-gap': 'half', 'row-gap': 'full' },
        content: genProducts(5)
      }
    },
    {
      block: 'layout',
      elem: 'container',
      elemMods: { size: 'm', align: 'center' },
      content: [
        {
          block: 'grid',
          mods: { 'm-columns': '12', 'col-gap': 'full', 'row-gap': 'full' },
          content: [
            {
              block: 'grid',
              elem: 'fraction',
              elemMods: { 'm-col': '8' },
              content: history,
            },
            {
              block: 'grid',
              elem: 'fraction',
              elemMods: { 'm-col': '4' },
              content: commercial,
            },
          ]
        }
      ]
    },
    footer
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = parseBEM(index);

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
});
