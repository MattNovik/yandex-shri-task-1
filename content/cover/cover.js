const cover = {
  block: 'cover',
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
      block: 'cover',
      elem: 'preview',
      mix: [
        {
          block: 'theme',
          mods: { color: 'project-brand' },
        }
      ],
      content: {
        block: 'cover__image',
        mix: {
          block: 'image'
        }
      }
    },
    {
      block: 'cover',
      elem: 'info',
      mix: {
        block: 'card',
        elem: 'content',
        elemMods: { 'space-a': 'xxl' }
      },
      content: [
        {
          block: 'text',
          mods: { view: 'primary', size: 'xxl' },
          content: {
            block: 'text',
            elem: 'word',
            elemMods: { width: 'l' }
          }
        },
        {
          block: 'text',
          mods: { view: 'primary', size: 'xxl' },
          content: {
            block: 'text',
            elem: 'word',
            elemMods: { width: 'm' }
          }
        },
      ]
    },
    {
      block: 'cover',
      elem: 'footer',
      mix: {
        block: 'card',
        elem: 'footer',
        elemMods: { 'space-a': 'xxl' }
      },
      content: {
        block: 'button',
        mods: { size: 'l', width: 'full' }
      }
    }
  ]
};

export default cover;