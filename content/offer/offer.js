import { words } from '../../template-engine.js';

const offer = {
  block: 'offer',
  mix: [
    {
      block: 'theme',
      mods: { color: 'megafon-brand' }
    },
    {
      block: 'card',
      mods: { view: 'default' }
    }
  ],
  content: [
    {
      block: 'offer',
      elem: 'partner',
      mix: {
        block: 'card',
        elem: 'content',
        elemMods: { 'space-a': 'xl' }
      },
      content: {
        block: 'brand-logo',
        mods: { size: 'm', name: 'megafon' }
      }
    },
    {
      block: 'offer',
      elem: 'footer',
      mix: {
        block: 'card',
        elem: 'footer',
        elemMods: { 'space-a': 'xl' }
      },
      content: [
        {
          block: 'offer',
          elem: 'name',
          content: {
            block: 'text',
            mods: { view: 'ghost', size: 's' },
            content: {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' }
            }
          }
        },
        {
          block: 'offer',
          elem: 'sale',
          content: {
            block: 'text',
            mods: { view: 'primary', size: 'xxl'},
            content: {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' }
            }
          }
        },
        {
          block: 'text',
          mods: { view: 'secondary', size: 'm' },
          content: words('l', 's', 'm', 'l', 's', 'm', 's', 'l')
        }
      ]
    }
  ]
};

export default offer;