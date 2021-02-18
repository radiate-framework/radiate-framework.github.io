module.exports = {
  title: "Radiate Framework",
  description: "A WordPress theme and plugin framework",
  base: "/",
  lang: "en-GB",
  themeConfig: {
    logo: "/favicon-48.png",
    nav: [
      { text: "Docs", link: "/docs/" },
      { text: "API Reference", link: "/api/" },
      {
        text: "GitHub",
        link: "https://github.com/BenRutlandWeb/radiate-framework",
      },
    ],
    sidebar: {
      "/docs/": [
        //----------------------------------------------------------------------
        {
          text: "Introduction",
          link: "/docs/",
        },
        //----------------------------------------------------------------------
        {
          text: "Getting Started",
          children: [
            {
              text: "Installation",
              link: "/docs/getting-started/installation",
            },
            //{
            //  text: "Configuration",
            //  link: "/docs/getting-started/configuration",
            //},
            //{
            //  text: "Directory Structure",
            //  link: "/docs/getting-started/directory-structure",
            //},
          ],
        },
        //----------------------------------------------------------------------
        {
          text: "The Basics",
          children: [
            {
              text: "Custom Post Types",
              link: "/docs/the-basics/custom-post-types",
            },
            {
              text: "Custom Taxonomies",
              link: "/docs/the-basics/custom-taxonomies",
            },
            {
              text: "Shortcodes",
              link: "/docs/the-basics/shortcodes",
            },
          ],
        },
        //----------------------------------------------------------------------
        {
          text: "Advanced",
          children: [
            {
              text: "Authentication",
              link: "/docs/advanced/authentication",
            },
            //{
            //  text: "Controllers",
            //  link: "/docs/advanced/controllers",
            //},
            //{
            //  text: "Events",
            //  link: "/docs/advanced/events",
            //},
            //{
            //  text: "Middleware",
            //  link: "/docs/advanced/middleware",
            //},
            //{
            //  text: "Routing",
            //  link: "/docs/advanced/routing",
            //},
          ],
        },
        //----------------------------------------------------------------------
      ],
      //"/api/": [{ text: "Hello API", link: "/api/" }],
    },
  },
};
