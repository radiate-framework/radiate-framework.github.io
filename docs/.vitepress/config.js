module.exports = {
  title: "Radiate Docs",
  description: "A WordPress theme and plugin framework",
  base: "/radiate-docs/",
  lang: "en-GB",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
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
