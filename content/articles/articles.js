import parseBEM from '../../template-engine.js';

function getArticle() {
  return {
    block: 'articles',
    elem: 'article',
    mix: {
      block: 'list',
      elem: 'item',
      elemMods: { 'indent-b': 'xl' }
    },
    content: [
      {
        block: 'articles',
        elem: 'unit',
        mix: {
          block: 'icon-plus',
          mods: { 'vertical-align': 'center' }
        },
        content: [
          {
            block: 'articles',
            elem: 'pic',
            mix: [
              {
                block: 'icon-plus',
                elem: 'icon',
                elemMods: { 'indent-r': 'm' }
              },
              {
                block: 'theme',
                mods: { color: 'project-inverse' }
              }
            ],
            content: {
              block: 'image'
            }
          },
          {
            block: 'articles',
            elem: 'content',
            mix: {
              block: 'icon-plus',
              elem: 'block'
            },
            content: [
              {
                block: 'text',
                mods: { view: 'secondary', size: 'l' },
                content: [
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
                    elemMods: { width: 'm' }
                  },
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
                ]
              },
              {
                block: 'text',
                mods: { view: 'link', size: 'm' },
                mix: {
                  block: 'articles',
                  elem: 'link'
                },
                content: [
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
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}

const articles = {
  block: 'articles',
  mix: {
    block: 'list',
    mods: { view: 'default' }
  },
  content: [
    getArticle(),
    getArticle(),
    getArticle()
  ]
}

export default articles;
