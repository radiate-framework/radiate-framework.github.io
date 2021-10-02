module.exports = {
  title: "Radiate Framework",
  description: "A WordPress theme and plugin framework",
  base: "/",
  lang: "en-GB",
  head: [["link", { rel: "manifest", href: "/manifest.json" }]],
  themeConfig: {
    logo: "/favicon-48.png",
    nav: getNavbar(),
    repo: "radiate-framework/framework",
    algolia: {
      apiKey: "686c9e21a4b69d54a0306a14167c4732",
      indexName: "radiate-framework",
    },
    sidebar: {
      "/docs/": getDocsSidebar(),
      "/api/": getApiSidebar(),
      "/": getDocsSidebar(),
    },
    ...editLinks(),
    lastUpdated: true,
  },
};

function editLinks() {
  return {
    docsRepo: "radiate-framework/radiate-framework.github.io",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
  };
}

function getNavbar() {
  return [
    { text: "Docs", link: "/docs/" },
    { text: "API Reference", link: "/api/" },
  ];
}

function getApiSidebar() {
  return [
    //----------------------------------------------------------------------
    {
      text: "Auth",
      children: [{ text: "AuthManager", link: "/api/auth/auth-manager" }],
    },
    //----------------------------------------------------------------------
    {
      text: "Http",
      children: [{ text: "Request", link: "/api/http/request" }],
    },
    //----------------------------------------------------------------------
    {
      text: "Routing",
      children: [{ text: "UrlGenerator", link: "/api/routing/url-generator" }],
    },
    {
      text: "Support",
      children: [
        { text: "Facades", link: "/api/support/facades" },
        { text: "Str", link: "/api/support/str" },
        { text: "Stringable", link: "/api/support/stringable" },
      ],
    },
    //----------------------------------------------------------------------
    {
      text: "View",
      children: [
        { text: "Factory", link: "/api/view/factory" },
        { text: "Finder", link: "/api/view/finder" },
        { text: "View", link: "/api/view/view" },
      ],
    },
    //----------------------------------------------------------------------
  ];
}

function getDocsSidebar() {
  return [
    //----------------------------------------------------------------------
    { text: "Introduction", link: "/docs/" },
    //----------------------------------------------------------------------
    {
      text: "Getting Started",
      children: [
        { text: "Installation", link: "/docs/getting-started/installation" },
        { text: "Configuration", link: "/docs/getting-started/configuration" },
        {
          text: "Directory Structure",
          link: "/docs/getting-started/directory-structure",
        },
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
        { text: "Shortcodes", link: "/docs/the-basics/shortcodes" },
      ],
    },
    //----------------------------------------------------------------------
    {
      text: "Advanced",
      children: [
        { text: "Authentication", link: "/docs/advanced/authentication" },
        { text: "Caching", link: "/docs/advanced/caching" },
        { text: "Controllers", link: "/docs/advanced/controllers" },
        { text: "Encryption", link: "/docs/advanced/encryption" },
        { text: "Events", link: "/docs/advanced/events" },
        { text: "HTTP Client", link: "/docs/advanced/http-client" },
        { text: "Middleware", link: "/docs/advanced/middleware" },
        { text: "Routing", link: "/docs/advanced/routing" },
        { text: "Validation", link: "/docs/advanced/validation" },
      ],
    },
    //----------------------------------------------------------------------
  ];
}
