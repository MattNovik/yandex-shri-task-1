const warning = {
  block: 'warning',
  mix: [
    {
      block: 'informer',
      mods: { view: 'default', border: 'all' }
    },
    {
      block: 'theme',
      mods: { color: 'project-warning' }
    }
  ],
  content: [
    {
      block: 'warning',
      elem: 'content',
      mix: {
        block: 'informer',
        elem: 'content',
        elemMods: { distribute: 'center', 'space-a': 'xxl' }
      },
      content: [
        {
          block: 'placeholder',
          mods: { view: 'primary', size: 'm' }
        },
        {
          block: 'text',
          mods: { view: 'primary', size: 'xl' },
          content: [
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 's' }
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
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' }
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
              elemMods: { width: 's' }
            },
            {
              block: 'text',
              elem: 'word',
              elemMods: { width: 'm' }
            }
          ]
        }
      ]
    },
    {
      block: 'warning',
      elem: 'button-wrapper',
      mix: {
        block: 'informer',
        elem: 'action',
        elemMods: { distribute: 'center', 'space-a': 'xl' }
      },
      content: {
        block: 'button',
        mods: { size: 'l' }
      }
    }
  ]
};

export default warning;