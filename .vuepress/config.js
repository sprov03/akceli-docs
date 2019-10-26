module.exports = {
  title: 'Akceli',
  description: 'Akcelerate your Laravel development',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Akceli', link: 'https://akceli.io'},
      { text: 'Login', link: 'https://app.akceli.io/login'},
    ],
    sidebar: {
      '/guide/': [
        ['', 'Intro'],
        ['installation', 'Installation'],
        ['getting-started', 'Walk Through']
      ]
    }
  }
};