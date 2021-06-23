/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cicada Distributed',
  tagline: 'The Easiest and Most Painless Way to Test Your Site',
  url: 'https://www.google.com', // TODO: Replace
  baseUrl: '/cicada-distributed-docs/', // NOTE: may need to change if domain changes
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cicada-logo-2.svg',
  organizationName: 'cicadatesting',
  projectName: 'cicada-distributed-docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Cicada Distributed',
      logo: {
        alt: 'Cicada Distributed Logo',
        src: 'img/cicada-logo-2.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction/installation',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/cicadatesting/cicada-distributed',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: '/docs/introduction/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/cicada-distributed',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/WC2Uk2Uh83',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog', // TODO: links to medium articles
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/cicadatesting/cicada-distributed',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cicada Testing. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-164919423-2',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cicadatesting/cicada-distributed-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cicadatesting/cicada-distributed-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
