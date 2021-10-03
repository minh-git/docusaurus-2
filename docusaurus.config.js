module.exports = {
  title: 'CATPUNK DOCS',
  tagline: 'The story of Catpunk',
  url: 'https://catpunk.net',
  baseUrl: '/',
  favicon: 'img/favico.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'CATPUNK', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CATPUNK',
      logo: {
        alt: 'CATPUNK Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '#',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://catpunk.net',
          label: 'CATPUNK OFFICIAL WEBSITE',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/doc1',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
        {
          title: 'Main links',
          items: [
            {
              label: 'Main Website',
              href: 'https://catpunk.net',
            },
            {
              label: 'Writer',
              to: 'https://blogs.billmcscifi.com/',
            },
            {
              label: '3D Artist',
              to: 'https://www.instagram.com/hantherealist/',
            },
          ],
        },
        {
          title: 'Community',
          items: [

            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/catpunk',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ZodiLabOfficial',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} CATPUNK by ZodiLAB`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
