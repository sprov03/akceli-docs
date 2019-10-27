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
        ['walk-through', 'Walk Through'],
        ['config-doc', 'Configuration'],
        ['generator-doc', 'Generators']
      ],
    }
  },
  head: [
    ['script', {async: null ,src: "https://www.googletagmanager.com/gtag/js?id=UA-151006134-2"}],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-151006134-2');
    `]
  ],
};