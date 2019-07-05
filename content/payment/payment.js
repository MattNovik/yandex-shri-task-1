const payment = {
  block: 'payment',
  mix: [
    {block: 'form', mods: {'border_all': true}}
  ],
  content: [
    {
      block: 'payment',
      elem: 'header',
      mix: {
        block: 'form',
        elem: 'item',
        elemMods: {'space-v': 'l', 'space-h': 'xl', 'border_bottom': true}
      },
      content: {
        block: 'text',
        mods: {'view': 'primary', 'size': 'xxl'},
        content: {
          block: 'text',
          elem: 'word',
          elemMods: {'width': 'l'}
        }
      }
    },
    {
      block: 'payment',
      elem: 'content',
      mix: {
        block: 'form',
        elem: 'item',
        elemMods: {'space-v': 'xxxl', 'space-h': 'xl', 'border_bottom': true}
      },
      content: 
      [
        {
          block: 'form',
          elem: 'item',
          elemMods: {'indent-b': 'xl', 'distribute': 'between', 'vertical-align': 'center'},
          content: [
            {
              block: 'form',
              elem: 'label',
              elemMods: {'width': 'default'},
              mix: {
                block: 'text',
                mods: {'view': 'primary', 'size': 'l'}
              },
              content: {
                block: 'text',
                elem: 'word',
                elemMods: {'width': 'l'}
              }
            },
            {
              block: 'form',
              elem: 'control',
              content: {
                block: 'input',
                mods: {'size': 'l'}
              }
            }
          ]
        },
        {
          block: 'form',
          elem: 'item',
          elemMods: {'indent-b': 'xl', 'distribute': 'between', 'vertical-align': 'center'},
          content: [
            {
              block: 'form',
              elem: 'label',
              elemMods: {'width': 'default'},
              mix: {
                block: 'text',
                mods: {'view': 'primary', 'size': 'l'}
              },
              content: {
                block: 'text',
                elem: 'word',
                elemMods: {'width': 'l'}
              }
            },
            {
              block: 'form',
              elem: 'control',
              content: {
                block: 'input',
                mods: {'size': 'l'}
              }
            }
          ]
        }
      ]
    },
    {
      block: 'payment',
      elem: 'footer', 
      mix: {
        block: 'form', 
        elem: 'item', 
        elemMods: { 'distribute': 'between', 
        'border': 'bottom', 
        'vertical-align': 'center',
        'space-v': 'l',
        'space-h': 'xl'             
      } 
    },
    content: [ 
      {
        block: 'form',
        elem: 'label',
        elemMods: { 'width': 'default' },
        mix: {
          block: 'text',
          mods: { 'view': 'primary', 'size': 'l' }
        },
        content: {
          block: 'text',
          elem: 'word',
          elemMods: { 'width': 'l' }
        }
      },
      {
        block: 'form',
        elem: 'control',
        mix: {
          block: 'button',
          mods: { 'size': 'l' }
        }
      }
    ]
  }
]
};

export default payment;
