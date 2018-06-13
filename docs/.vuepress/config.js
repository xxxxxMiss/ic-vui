module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ic-vui',
      description: 'A Vue.js UI components library'
    },
    '/zh-CN': {
      lang: 'zh-CN',
      title: 'ic-vui',
      description: '一套Vue.js UI组件库'
    }
  },
  themeConfig: {
    repo: 'xxxxxMiss/ic-vui',
    docsDir: 'docs',
    '/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      nav: [
        {
          text: 'Guide',
          link: '/guide/'
        },
      ],
      sidebar: [
        {
          title: 'Components',
          collapseable: false,
          children: [
            '/en-US/avatar',
            '/en-US/badge',
            '/en-US/button',
            '/en-US/cell',
            '/en-US/checkbox',
            '/en-US/datetime-picker',
            '/en-US/dialog',
            '/en-US/filter',
            '/en-US/header',
            '/en-US/icon',
            '/en-US/input'
          ]
        }
      ]
    }
    '/zh-CN/': {
      label: '简体中文',
      selectText: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      nav: [
        {
          text: '指南',
          link: '/guide/'
        }
      ],
      sidebar: [
        {
          title: '组件',
          collapseable: false,
          children: [
            '/zh-CN/avatar',
            '/zh-CN/badge',
            '/zh-CN/button',
            '/zh-CN/cell',
            '/zh-CN/checkbox',
            '/zh-CN/datetime-picker',
            '/zh-CN/dialog',
            '/zh-CN/filter',
            '/zh-CN/header',
            '/zh-CN/icon',
            '/zh-CN/input'
          ]
        }
      ]
    }
  }
}
