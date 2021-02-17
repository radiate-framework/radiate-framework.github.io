module.exports = {
  title: "Radiate Docs",
  description: "A WordPress theme and plugin framework",
  base: "/docs/",
  lang: "en-GB",
  themeConfig: {
    logo: "./favicon-48.png",
    nav: [
      { text: "Home", link: "/" },
      //{ text: "Quick Start", link: "quick-start" },
      {
        text: "GitHub",
        link: "https://github.com/BenRutlandWeb/radiate-framework",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction/",
        children: [
          //{ text: "Release Notes", link: "releases" },
          //{ text: "Upgrade Guide", link: "upgrades" },
          //{ text: "Contribution Guide", link: "contributions" },
        ],
      },
      {
        text: "Getting Started",
        children: [
          { text: "Installation", link: "/getting-started/installation" },
          { text: "Configuration", link: "/getting-started/configuration" },
          {
            text: "Directory Structure",
            link: "/getting-started/directory-structure",
          },
          // { text: "Deployment", link: "getting-started/deployment" },
        ],
      },
      {
        text: "WordPress",
        children: [
          { text: "Custom Post Types", link: "/wordpress/custom-post-types" },
        ],
      },
      {
        text: "The Basics",
        children: [
          { text: "Authentication", link: "/the-basics/authentication" },
          { text: "Controllers", link: "/the-basics/controllers" },
          { text: "Events", link: "/the-basics/events" },
          { text: "Middleware", link: "/the-basics/middleware" },
          { text: "Routing", link: "/the-basics/routing" },
        ],
      },
    ],
  },
};
