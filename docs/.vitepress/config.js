module.exports = {
  title: "Radiate Docs",
  description: "A WordPress theme and plugin framework",
  base: "/radiate-docs/",
  lang: "en-GB",
  themeConfig: {
    logo: "./favicon-48.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Theme", link: "https://github.com/BenRutlandWeb/radiate-theme" },
      {
        text: "Plugin",
        link: "https://github.com/BenRutlandWeb/radiate-plugin",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "introduction/",
        children: [
          //{ text: "Release Notes", link: "releases" },
          //{ text: "Upgrade Guide", link: "upgrades" },
          //{ text: "Contribution Guide", link: "contributions" },
        ],
      },
      {
        text: "Getting started",
        link: "getting-started/",
        children: [
          { text: "Installation", link: "getting-started/installation" },
          { text: "Configuration", link: "getting-started/configuration" },
          {
            text: "Directory Structure",
            link: "getting-started/directory-structure",
          },
          // { text: "Deployment", link: "getting-started/deployment" },
        ],
      },
      {
        text: "The basics",
        link: "the-basics/",
        children: [{ text: "Routing", link: "the-basics/routing" }],
      },
    ],
  },
};
