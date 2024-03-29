const commercial = {
  block: 'commercial',
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
      block: 'commercial',
      elem: 'pic',
      mix: {
        block: 'card',
        elem: 'content',
        elemMods: { 'space-a': 'xxl' }
      },
      content: {
        block: 'commercial',
        elem: 'image',
        mix: {
          block: 'image'
        }
      }
    },
    {
      block: 'commercial',
      elem: 'info',
      mix: {
        block: 'card',
        elem: 'footer',
        elemMods: { 'space-a': 'xxl' }
      },
      content: [
        {
          block: 'text',
          mods: { view: 'primary', size: 's' },
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
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 's' }
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 's' }
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
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' }
            },
          ]
        },
        {
          block: 'commercial',
          elem: 'navigation',
          content: [
            {
              block: 'commercial',
              elem: 'page-button'
            },
            {
              block: 'commercial',
              elem: 'page-button'
            },
            {
              block: 'commercial',
              elem: 'page-button'
            },
          ]
        }
      ]
    }
  ]
};

export default commercial;

