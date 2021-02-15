import "./styles/vars.css";
import "./styles/layout.css";
import "./styles/code.css";
import "./styles/custom-blocks.css";
import "./styles/sidebar-links.css";

import Layout from "vitepress/dist/client/theme-default/Layout.vue";

import AppNotice from "./components/AppNotice.vue";
import AppIcon from "./components/AppIcon.vue";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("AppNotice", AppNotice);
    app.component("AppIcon", AppIcon);
  },
};
