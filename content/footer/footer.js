import { words }  from '../../template-engine.js';

const footer = {
  block: 'footer',
  content: {
    block: 'footer',
    elem: 'content',
    content: [
      {
        block: 'text',
        mods: { view: 'primary', size: 'l' },
        content: words('l', 's')
      },
      {
        block: 'text',
        mods: { view: 'primary', size: 'l' },
        content: words('l')
      }
    ]
  }
};

export default footer;
