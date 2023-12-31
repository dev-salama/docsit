/* 
  This is the configuration file for DocsIt.
*/

/** @type {import('.docsit/types/config').Config} */
const config = {
  title: "DocsIt",
  tagline: "Building a documentation website has never been easier!",
  favicon: "img/favicon.ico",
  logo: {
    alt: "My Site Logo",
    src: "/img/logo.png",
  },

  theme: {
    navbar: {
      title: "DocsIt",
   /*    logo: {
        alt: "My Site Logo",
        src: "/img/logo.png",
      }, */
      items: [
        {
          to: "docs/intro",
          label: "Tutorial",
        },
        {
          to: "https://github.com/devmuhnnad/docsit",
          label: "GitHub",
          newTab: true,
        },
      ],
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} DocsIt.`,
    },
  },
};

export default config;
