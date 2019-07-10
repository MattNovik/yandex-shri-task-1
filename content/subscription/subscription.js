import { words } from '../../template-engine.js';

const advantage = (...wordWidths) => ({
  block: 'subscription',
  elem: 'advantage',
  mix: {
    block: 'list',
    elem: 'item',
    elemMods: { 'space-b': 's' },
  },
  content: {
    block: 'text',
    mods: { view: 'primary', size: 'l' },
    content: words(...wordWidths),
  },
});

const subscription = {
  block: 'subscription',
  mix: [
    {
      block: 'card',
      mods: { view: 'default' }
    },
    {
      block: 'theme',
      mods: { color: 'project-brand' }
    }
  ],
  content: [
    {
      block: 'subscription',
      elem: 'info',
      mix: {
        block: 'card',
        elem: 'content',
        elemMods: { 'space-a': 'xl' }
      },
      content: [
        {
          block: 'subscription',
          elem: 'title',
          content: {
            block: 'text',
            mods: { view: 'primary', size: 'xxl' },
            content: {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'l' }
            }
          }
        },
        {
          block: 'subscription',
          elem: 'advantages',
          mix: {
            block: 'list'
          },
          content: [
            advantage('l', 'm', 's'),
            advantage('l', 's', 's'),
            advantage('m', 's', 's'),
            advantage('l', 's', 's'),
            advantage('m', 's', 's')
          ]
        }
      ]
    },
    {
      block: 'subscription',
      elem: 'footer',
      mix: [
        {
          block: 'card',
          elem: 'footer',
          elemMods: { 'space-a': 'xl' }
        },
        {
          block: 'list'
        }
      ],
      content: [
        {
          block: 'subscription',
          elem: 'control',
          mix: {
            block: 'list',
            elem: 'item',
            elemMods: { 'indent-b': 's' }
          },
          content: {
            block: 'input',
            mods: { size: 'l' }
          }
        },
        {
          block: 'button',
          mods: { width: 'full', size: 'l' }
        }
      ]
    }
  ]
};

export default subscription;
