import parseBEM from '../../template-engine.js';

/**
* @param {string} brand
* @return {object}
*/
function getHistoryItem(brand) {
  const item = {
    block: 'history',
    elem: 'transaction',
    mix: [
      {
        block: 'list',
        elem: 'item',
        elemMods: { border: 'bottom', 'space-a': 'l' }
      },
      {
        block: 'e-accordion'
      }
    ],
    content: [
      {
        block: 'history',
        elem: 'show',
        mix: [
          { 
            block: 'e-accordion',
            elem: 'short'
          },
          {
            block: 'list',
            elem: 'item',
            elemMods: { 'vertical-align': 'center', 'indent-t': 'm' }
          }
        ],
        content: 
        {
          block: 'history',
          elem: 'details',
          content: [
            {
              block: 'history',
              elem: 'time',
              content: [
                {
                  block: 'text',
                  mods: { view: 'ghost', size: 's' },
                  content: {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'm' }
                  }
                },
                {
                  block: 'text',
                  mods: { view: 'ghost', size: 's' },
                  content: {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'm' }
                  }
                },
              ]
            },
            {
              block: 'history',
              elem: 'destination',
              mix: {
                block: 'icon-plus',
                mods: { 'vertical-align': 'center' }
              },
              content: [
                {
                  block: 'history',
                  elem: 'pic',
                  mix: {
                    block: 'icon-plus',
                    elem: 'icon',
                    elemMods: { 'indent-r': 's', 'indent-l': 'l' }
                  },
                  content: {
                    block: 'brand-logo',
                    mods: { name: brand, size: 'm' }
                  }
                },
                {
                  block: 'history',
                  elem: 'label',
                  mix: {
                    block: 'icon-plus',
                    elem: 'block'
                  },
                  content: [
                    {
                      block: 'text',
                      mods: { view: 'primary', size: 'l' },
                      content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: { width: 'l' }
                      }
                    },
                    {
                      block: 'text',
                      mods: { view: 'primary', size: 'l' },
                      content: {
                        block: 'text',
                        elem: 'word',
                        elemMods: { width: 'm' }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        block: 'history',
        elem: 'hide',
        mix: [
          {
            block: 'e-accordion',
            elem: 'more',
            elemMods: { view: 'default' }
          },
          {
            block: 'list',
            elem: 'item',
            elemMods: { 'indent-t': 'm' }
          }
        ],
        content: [
          {
            block: 'history',
            elem: 'description',
            mix: {
              block: 'list',
              elem: 'item',
              elemMods: { 'indent-b': 'm' }
            },
            content: [
              {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'l' }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'm' }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'l' }
                  }
                ]
              },
              {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: [
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'l' }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'm' }
                  },
                  {
                    block: 'text',
                    elem: 'word',
                    elemMods: { width: 'l' }
                  }
                ]
              }
            ]
          },
          {
            block: 'history',
            elem: 'actions',
            mix: {
              block: 'list',
              elem: 'item',
              elemMods: { distribute: 'between', 'indent-b': 'l' }
            }, 
            content: [
              {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: { width: 'l' }
                }
              },
              {
                block: 'text',
                mods: { view: 'primary', size: 'l' },
                content: {
                  block: 'text',
                  elem: 'word',
                  elemMods: { width: 'm' }
                }
              }
            ]
          }
        ]
      }
    ]
  }
  return item;
}

function createHistoryBlock() {
  const brands = ['yota', 'mts', 'kcell', 'megafon'];
  const items = brands.map(brand => getHistoryItem(brand));
  const history = {
    block: 'history',
    mix: {
      block: 'list',
      mods: { view: 'default', border: 'all' }
    },
    content: items
  };
  return history;
}

const history = createHistoryBlock();

export default history;
