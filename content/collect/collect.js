const collect = {
  block: 'collect',
  mix: [
    {
      block: 'card',
      mods: { view: 'default', border: 'all' }
    },
    {
      block: 'theme',
      mods: { color: 'project-inverse' }
    }
  ],
  content: [
    {
      block: 'collect',
      elem: 'image',
      mix: {
        block: 'card',
        elem: 'content'
      },
      content: {
        block: 'image'
      }
    },
    {
      block: 'collect',
      elem: 'progress',
      content: {
        block: 'collect',
        elem: 'done',
        elemMods: { size: 'two-thirds' }
      }
    },
    {
      block: 'collect',
      elem: 'footer',
      mix: {
        block: 'card',
        elem: 'footer',
        elemMods: { 'space-a': 'l' }
      },
      content: [
        {
          block: 'text',
          mods: { view: 'primary', size: 'l' },
          mix: {
            block: 'collect',
            elem: 'heading'
          },
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
            }
          ]
        },
        {
          block: 'text',
          mods: { view: 'secondary', size: 'm' },
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
              elemMods: { width: 'l' }
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
          ]
        }
      ]
    }
  ]
};

export default collect;
